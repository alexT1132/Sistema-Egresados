import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/Egresados");
    console.log(">>> DB is conected");
  } catch (error) {
    console.log(error);
  }
};
