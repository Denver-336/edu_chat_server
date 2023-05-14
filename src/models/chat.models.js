import { Schema, model } from 'mongoose'

const MessageSchema = new Schema(
  {
    message: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    }
  }
)

export default model('Message', MessageSchema)
