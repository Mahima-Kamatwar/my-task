import express from "express"
import { UserRegister, handleEmailOtp } from "../controllers/controllers.js"

const userRouter = express.Router()

userRouter.get("/test", (request, response) => { 
    response.status(200).json({ message: "you reached test route !" }) 
})

userRouter.post("/user-register", UserRegister)
userRouter.post("/verify-email-otp", handleEmailOtp)

userRouter.post("/reset-password-request", handleEmailOtp)

userRouter.post("/verify-password-reset-otp", handleEmailOtp)

export { userRouter }