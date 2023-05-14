import app from './app.js'
import http from 'http'
import { SocketServer } from './socket/SocketServer.js'
import { PORT } from './config/config.js'

// SOCKET.IO
const server = http.createServer(app)
SocketServer(server)

// ARRANQUE DEL SERVIDOR
server.listen(PORT)
console.log('servidor corriendo en http://localhost:' + PORT)
