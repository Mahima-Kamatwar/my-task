import { userModel } from "../models/UserSchema.js"
import { redisClient } from "../utils/redisConfig.js";
import nodemailer from "nodemailer"
import bcrypt from "bcrypt";


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
    },
});

let genrateOTP = () => {
    return Math.floor((Math.random() * 9000) + 1000)
}

let sendEmail = async (email) => {
    try {

        let otp = genrateOTP()

        let result = await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "test otp email !",
            html: `
                <h1>your otp is <span style="color:red;">${otp}</span> </h1>
                <p>this otp is valid for 5 mins.</p>
            `
        })

        console.log(result)

        console.log("an email has been sent !")

        // store user otp in redis for verification

        redisClient.set(`user.${email}`, otp, 300)

        return result

    } catch (err) {
        console.log("unable to send email: ", err)
        throw err
    }
}

let UserRegister = async (req, res) => {
    try {

        let { name, phone, email, address, password } = req.body

        if (!name || !phone || !email || !address || !password) throw ("invalid/incomplete data !")

        let userExist = await userModel.findOne({ $or: [{ "email.userEmail": email }, { "phone": phone }] })

        if (userExist) throw ("duplicate email/phone please try again with different phone/email !")

        let emailObject = {
            userEmail: email, verified: false
        }

        await sendEmail(email)

        let newUser = new userModel({ name, phone, email: emailObject, address, password })

        await newUser.save()

        console.log("user registred successfully !")

        res.status(202).json({ message: "user registered successfully !" })

    } catch (err) {
        console.log("unable to register the user : ", err)
        res.status(400).json({ message: "unble to register user !", err })
    }
}

const handleEmailOtp = async (req, res) => {
    try {
        let { email, otp } = req.body

        if (!email || !otp) throw ("invalid data !")

        let user = await userModel.findOne({ "email.userEmail": email })

        if (!user) throw ("invalid email please register first !")

        let storedUserOtp = await redisClient.get(`user.${user.email.userEmail}`)

        if (!storedUserOtp) throw ("invalid or expried OTP !")

        if (storedUserOtp != otp) throw ("otp din't matched !")

        let updateResult = await userModel.updateOne({ "email.userEmail": email }, { "email.verified": true })

        if (updateResult.modifiedCount == 0) throw ("din't update any user !")

        res.status(202).json({ message: "otp verified successfully !" })
    }
    catch (err) {
        console.log("unable to verify otp: ", err)
        res.status(400).json({ message: "error in OTP verification", err })
    }
}

// password reset

let handlePasswordReset = async (req, res) => {
    try {
        let { email } = req.body

        if (!email) throw ("email required!")

        // Check if user exists
        let user = await userModel.findOne({ "email.userEmail": email })
        if (!user) throw ("invalid email, please register first!")

        // Generate OTP
        let otp = Math.floor((Math.random() * 9000) + 1000)

        // Store OTP in Redis (valid for 5 mins = 300 seconds)
        await redisClient.setEx(`reset.${email}`, 300, otp.toString())

        // Send OTP via email
        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "Password Reset OTP",
            html: `
                <h2>Password Reset Request</h2>
                <p>Your OTP for password reset is <b style="color:red;">${otp}</b></p>
                <p>This OTP is valid for 5 minutes.</p>
            `,
        })

        console.log(`Password reset OTP sent to ${email}`)
        res.status(200).json({ message: "OTP sent to your email successfully!" })

    } catch (err) {
        console.log("Error in handlePasswordReset:", err)
        res.status(400).json({ message: "Unable to send password reset OTP!", err })
    }
}


let handlePasswordResetOtp = async (req, res) => {
    try {
        let { email, otp, newPassword } = req.body

        if (!email || !otp || !newPassword)
            throw ("Missing required fields: email, otp, or newPassword")

        // Check user existence
        let user = await userModel.findOne({ "email.userEmail": email })
        if (!user) throw ("User not found!")

        // Get stored OTP from Redis
        let storedOtp = await redisClient.get(`reset.${email}`)
        if (!storedOtp) throw ("OTP expired or not found!")
        if (storedOtp !== otp) throw ("Invalid OTP!")

        // Hash new password
        let hashedPassword = await bcrypt.hash(newPassword, 10)

        // Update user's password
        let updateResult = await userModel.updateOne(
            { "email.userEmail": email },
            { $set: { password: hashedPassword } }
        )

        if (updateResult.modifiedCount === 0) throw ("Failed to update password!")

        // Delete OTP after use
        await redisClient.del(`reset.${email}`)

        console.log(`Password reset successful for ${email}`)
        res.status(200).json({ message: "Password reset successful!" })

    } catch (err) {
        console.log("Error in handlePasswordResetOtp:", err)
        res.status(400).json({ message: "Unable to reset password!", err })
    }
}

export { UserRegister, handleEmailOtp, handlePasswordReset, handlePasswordResetOtp }