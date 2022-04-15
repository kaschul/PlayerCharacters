import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import characterRoutes from './routes/characterRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.json({'msg': 'Time for some D&D'})
})

app.use('/api/characters', characterRoutes)
app.use('/api/npcs', characterRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));