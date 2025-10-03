import express from "express"
import { getTable, getImage, getContact, postForm} from "../controller/controller.js"
const router = express.Router()

router.get("/", getTable)
router.get("/Image", getImage)
router.get("/contact", getContact)

router.post("/form-data", postForm)

export { router }