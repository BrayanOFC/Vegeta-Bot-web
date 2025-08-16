import { connectDB } from "../../lib/mongodb"
import User from "../../models/User"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  await connectDB()
  const { username, password } = req.body

  const exists = await User.findOne({ username })
  if (exists) return res.status(400).json({ msg: "Usuario ya existe" })

  const user = await User.create({ username, password })
  res.json({ success: true, user })
}