import Chat from "../models/chat.model.js";

async function createChat(req, res) {
  const { title } = req.body;
  const userId = req.user._id;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const chat = await Chat.create({
    user: userId,
    title,
  });

  return res.status(201).json({
    message: "chat is created",
    chat: {
      _id: chat._id,
      title: chat.title,
      user: chat.user,
      lastActivity: chat.lastActivity,
    },
  });
}

export default {
  createChat,
};
