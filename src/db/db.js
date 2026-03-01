import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is connected MongoDB");
  } catch (error) {
    console.log("Error to connecting to MongoDB", error);
  }
};

export default connectDB;
