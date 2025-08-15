import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv/config'
import connectdb from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import { inngest, functions } from "./inggest/Inggest.js"
import { serve } from "inngest/express";


const app = express()
app.use(cors())
app.use(express.json())

app.use(clerkMiddleware)
await connectdb()
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Booking API')
})
app.use("/api/inngest", serve({ client: inngest, functions }))

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
