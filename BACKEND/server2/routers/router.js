import express from "express"
import { getHome, getAbout, getContact } from "../controller/controller.js"
const router = express.Router()

router.get("/", getHome)
router.get("/about", getAbout)
router.get("/contact", getContact)

export { router }