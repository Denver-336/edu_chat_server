import Message from '../models/chat.models.js'

const messageController = {
  // GUARDAR MENSAJES
  postMessages: (req, res) => {
    const params = req.body
    const message = new Message()
    message.message = params.message
    message.from = params.from

    message.save((error, messageStored) => {
      if (error || !messageStored) {
        return res.status(404).send({ msg: 'No ha si podible guardar el mensaje' })
      }
      return res.status(200).send({ msg: messageStored })
    })
  },

  // OBTENER MENSAJES
  getMessages: (req, res) => {
    const query = Message.find({})
    query.sort('-_id').exec((error, messages) => {
      if (error) return res.status(500).send({ msg: 'Error al extraer los datos' })
      if (!messages) return res.status(404).send({ msg: 'No hay mensajes para mostrar' })
      return res.status(200).json({ messages })
    })
  }

}

export default messageController
