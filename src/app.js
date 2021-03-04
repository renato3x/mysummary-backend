import express from 'express'
import router from './router'
import path from 'path'
import cors from 'cors'
import { Server } from 'http'
import dotenv from 'dotenv'
import socketIO from 'socket.io'
import { io as connect } from 'socket.io-client'
import WebSocketService from './services/WebSocketService'

//.dot env init
dotenv.config({path: path.join(__dirname, '..', '.env')})

//server instance
const app = express()
const server = Server(app)
const io = socketIO(server, {
  cors: {
    origin: '*'
  }
})

//initializing cors
app.use(cors())

//body parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//socket io
const webSocketService = new WebSocketService(io, connect('http://localhost:3000'))
webSocketService.start()

//routes
app.use(router)
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')))

//server init
const port = process.env.PORT || 3333
server.listen(port, () => {
  console.log(`Server open in port ${port}`)
})

export default io