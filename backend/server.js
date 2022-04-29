import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/db.js'
import characterRoutes from './routes/characterRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/pcs', characterRoutes)
app.use('/api/npcs', characterRoutes)
app.use('/api/partyplayers', userRoutes)
app.use('/api/playerorders', orderRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));