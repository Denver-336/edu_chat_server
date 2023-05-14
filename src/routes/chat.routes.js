import { Router } from 'express'
// import messageController from '../controller/chat.controllers.js'

const router = Router()

// DEFINIMOS RUTAS PARA CHAT
// routerChat.get('/chat', messageController.getMessages)
// router.post('/chat', messageController.postMessages)
router.get('/chat', (req, res) => {
  res.send('bienvenidos al chat')
})

export default router
