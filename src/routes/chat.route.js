import express from 'express'
import protect from '../middlewares/auth.middleware.js'
import chatController from '../controllers/chat.controller.js'
const router = express.Router()

router.get("/" , protect, (req , res) => {
    res.status(200).json({
        messsage:"Chat router here"
    })
})

router.post("/" , protect , chatController.createChat);


export default router