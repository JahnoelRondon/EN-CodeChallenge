import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import {router as itemsRouter} from './routes/items.mjs'

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/items', itemsRouter)

// Connect to db
mongoose.connect(
  process.env.MONGO_DB, () => console.log('connected to db')
)

app.listen(3001)