import express from 'express'
import 'dotenv/config'
import {connectDB} from './database/index.js'
import cors from 'cors'
import bookRouter from './routes/bookRouter.js'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middlewares/errorMiddlewares.js'



export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Allow requests from specific frontend origin
app.use(cors({
  origin: [process.env.FRONT_END_URL], // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies/auth headers
}));

app.use("/api/books",bookRouter);

connectDB();









app.use(errorMiddleware);