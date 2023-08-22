import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import userRoutes from './src/routes/userRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import connectToMongoDB from './src/databases/mongo.js'

dotenv.config()
connectToMongoDB()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(morgan('dev')) // Logging
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.json())

// Routes
app.use('/users', userRoutes)
app.use('/', authRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app