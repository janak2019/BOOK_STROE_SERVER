import express from 'express'
import 'dotenv/config'
import {connectDB} from './database/index.js'
import cors from 'cors'
import authRouter from './routes/authRouter.js'
import bookRouter from './routes/bookRouter.js'
import userRouter from './routes/userRouter.js'
import borrowRouter from './routes/borrowRouter.js'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middlewares/errorMiddlewares.js'



export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Allow requests from specific frontend origin
app.use(cors({
  origin: ["https://bookstore-client-liart.vercel.app"], // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies/auth headers
}));
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/books",bookRouter);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/borrow",borrowRouter);


connectDB();









app.use(errorMiddleware);