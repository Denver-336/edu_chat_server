import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT

export const DB = process.env.MONGODB_URI

export const ORIGIN = process.env.ORIGIN
