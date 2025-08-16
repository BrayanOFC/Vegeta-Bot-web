import { connectDB } from "../../lib/mongo"
import User from "../../models/User"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  await connectDB()
  const { username, password } = req.body
  const user = await User.findOne({ username, password })
  if (!user) return res.status(401).json({ success: false, msg: "Credenciales inválidas" })
  res.json({ success: true, user })
}