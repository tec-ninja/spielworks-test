import dotenv from 'dotenv'
import express, { Express } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config();

// connect to mongodb
const dbUrl: string = process.env.MONGO_DB || 'mongodb://localhost:27017'
mongoose
    .connect(dbUrl)
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.log(err))

const app: Express = express();
const port: string = process.env.PORT || '8000';

app.use(cors())
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});