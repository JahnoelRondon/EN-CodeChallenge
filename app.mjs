import express from 'express';
import mongoose from 'mongoose'
import 'dotenv/config'

import {router as itemsRouter} from './routes/items.mjs'

const app = express();

// Middlewares
app.use('/items', itemsRouter)

// Routes
app.get('/', (req, res) => {
  res.send('We are home')
})


// Connect to db
mongoose.connect(
  process.env.MONGO_DB, () => console.log('connected to db')
)

app.listen(3001)