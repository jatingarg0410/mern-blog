import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()
const app = express()
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.listen(3000, () => console.log('Server running on port 3000!!'))
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
