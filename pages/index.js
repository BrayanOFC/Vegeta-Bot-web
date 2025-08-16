import { connectDB } from "../../lib/mongo"
import User from "../../models/User"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  await connectDB()
  const { userId, cost } = req.body
  const user = await User.findById(userId)

  if (!user) return res.status(404).json({ msg: "Usuario no encontrado" })
  if (user.coins < cost) return res.status(400).json({ msg: "Fondos insuficientes" })

  user.coins -= cost
  await user.save()
  res.json({ success: true, user })
}