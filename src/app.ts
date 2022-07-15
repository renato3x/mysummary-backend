import express from 'express'
import cors from 'cors'
import { Server } from 'http'
import socketIo from 'socket.io'
import { io as connect } from 'socket.io-client'
import WebSocketService from './services/WebSocketService'
import router from './router'

import './database/connection'

const app = express()
const server = new Server(app)
const io = new socketIo.Server(server, {
  cors: {
    origin: '*'
  }
})
const webSocketService = new WebSocketService(io, connect(`${process.env.APPLICATION_URL}`))

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

webSocketService.start()

app.use(router)

export { server, io }
