import mongoose from 'mongoose'
import { DB } from '../config/config.js'

export const db = () => {
  mongoose
    .connect(DB, { useNewUrlParser: true })
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch(() => console.log('Error de conexión con la base de datos'))
}
