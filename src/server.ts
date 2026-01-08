import express from 'express'
import ticketRouter from './Router/ticketRouter'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

connectDB()

app.use(cors({
    origin:'https://ticketsystemfrontend.vercel.app',
   
    credentials: true
}))

app.use(express.json()); 

app.use('/', ticketRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});