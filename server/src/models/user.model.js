import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
