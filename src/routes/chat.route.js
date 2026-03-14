import express from "express";
import protect from "../middlewares/auth.middleware.js";
import chatController from "../controllers/chat.controller.js";
import { pineconeCreate } from "../controllers/pinecone.controller.js";
import Chat from "../models/chat.model.js";
const router = express.Router();

router.get("/", protect, (req, res) => {
  res.status(200).json({
    messsage: "Chat router here",
  });
});

router.post("/", protect, chatController.createChat);

router.post("/pinecone", protect, pineconeCreate);

router.get("/chats", protect, async (req, res) => {
  const user = req.user;
  try {
    const chats = await Chat.find({
      user: user._id,
    });
    res.status(200).json({
      chats,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
