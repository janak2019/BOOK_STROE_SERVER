import express from 'express'
import 'dotenv/config'
import {connectDB} from './database/index.js'

export const app = express()

connectDB()
