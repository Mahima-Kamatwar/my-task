import express from "express"
import { HandleUserRegister } from "../controllers/controllers.js"

const userRouter = express.Router()

userRouter.get("/test", (req, res) => { res.status(200).json({ message: "you reached test route !" }) })

userRouter.post("/user-register", HandleUserRegister)

export { userRouter }