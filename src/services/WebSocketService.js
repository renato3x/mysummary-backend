import RequestService from './RequestService'
import nodeCron from 'node-cron'
import fsExtra from 'fs-extra'
import path from 'path'

export default class WebSocketService {
  constructor(serverSocket, clientSocket) {
    this.serverSocket = serverSocket
    this.clientSocket = clientSocket

    this.requestQuantity = 0
    this.requestId = ''
    this.requestService = new RequestService()
  }

  async start() {
    this.requestId = await this.requestService.createNewRequestInDatabase()

    this.serverSocket.on('connection', async (socket) => {
      this.requestQuantity = await this.requestService.getRequestQuantity(this.requestId)
      this.emitRequestQuantity()
    })

    this.clientSocket.on('updateRequestQuantity', async () => {
      this.requestQuantity = await this.requestService.updateRequestQuantity(this.requestId)
      this.emitRequestQuantity()
    })

    nodeCron.schedule('59 23 * * *', async () => {
      fsExtra.emptyDir(path.resolve(__dirname, '..', 'pdfs'))
      this.requestId = await this.requestService.createNewRequestInDatabase()
      this.requestQuantity = await this.requestService.getRequestQuantity(this.requestId)

      this.emitRequestQuantity()
    })
  }

  emitRequestQuantity() {
    this.serverSocket.emit('requestQuantity', {
      requestQuantity: this.requestQuantity,
      canRequest: this.requestQuantity < 100
    })
  }
}
