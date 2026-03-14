import express from "express";
import authController from "../controllers/auth.controller.js";
import protect from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.Login);

router.get("/me", protect, async (req, res) => {
  const user = req.user;

  return res.status(200).json({
    user,
  });
});

export default router;
