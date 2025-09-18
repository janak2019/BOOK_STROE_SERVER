import express from 'express'
import 'dotenv/config'
import {connectDB} from './database/index.js'
import cors from 'cors'
import {User} from'./models//userModel.js'

export const app = express()
connectDB()


// Allow requests from specific frontend origin
app.use(cors({
  origin: ["http://localhost:5173","https://bookstore-client-tau.vercel.app"], // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies/auth headers
}));


app.get("/jokes",(req,res)=>{
  const jokes = [
    {
      id:1,
      title:'First Joke',
      content:'Joke1'
    },
    {
      id:2,
      title:'Another Joke',
      content:'Joke1'
    },
    {
      id:3,
      title:'Third Joke',
      content:'Joke1'
    },
    {
      id:4,
      title:'Fourth Joke',
      content:'Joke1'
    },
    {
      id:5,
      title:'Fifth Joke',
      content:'Joke1'
    },
    
  ]
  res.send(jokes)
})