import express from 'express'
import authController from '../controllers/auth.controller.js'
const router = express.Router()


router.post("/register" , authController.registerUser);

router.post("/login" , authController.Login);


export default router