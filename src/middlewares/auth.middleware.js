import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function protect(req, res, next) {
  let token;
  try {
    if (req.cookies?.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    
    let user;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   

    user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
}

export default protect;
