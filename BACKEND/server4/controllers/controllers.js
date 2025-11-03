import { userModel } from "../models/UserSchema.js"

let UserRegister = async (request, response) => {
    try {

        let { name, phone, email, address, password } = request.body

        if (!name || !phone || !email || !address || !password) throw ("invalid data !")

        let userExist = await userModel.findOne(
            { $or: [{ "email.userEmail": email }, { "phone": phone }] }
        )

        if (userExist) throw ("duplicate email/ phone !")

        let emailObject = {
            userEmail: email, verified: false
        }

        let newUser = new userModel({ name, phone, email: emailObject, address, password })

        await newUser.save()

        console.log("user registred successfully !")

        response.status(202).json({ message: "user registered successfully !" })

    } catch (err) {
        // console.log("unable to register the user : ", err)
        response.status(400).json({ message: "unable to register user !", err })
    }
}

export { UserRegister }

