import express from 'express'
import {getAllUsers,registerNewAdmin} from "../controller/userController.js"
import {isAuthenticated,isAuthorized} from "../middlewares/authMiddlewares.js"
import { upload } from '../controller/multerController.js'

const router = express.Router()

router.get("/all",isAuthenticated,isAuthorized("Admin"),getAllUsers)
//using cloudinary
// router.post(
//     "/add/new-admin",
//     isAuthenticated,
//     isAuthorized("Admin"),
//     registerNewAdmin)
//using multer
router.post("/add/new-admin",
    isAuthenticated,
    isAuthorized("Admin"),upload.single('avatar'), registerNewAdmin);

export default router

