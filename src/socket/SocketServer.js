import { Server } from 'socket.io'
import { ORIGIN } from '../config/config.js'

export const SocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ORIGIN
    }
  })

  io.on('connection', (socket) => {
    socket.on('frontMessage', (message) => {
      socket.broadcast.emit('backMessage', message)
    })
  })
}
