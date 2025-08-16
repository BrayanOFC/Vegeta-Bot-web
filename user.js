import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coins: { type: Number, default: 100 },
  level: { type: Number, default: 1 }
})

export default mongoose.models.User || mongoose.model("User", UserSchema)