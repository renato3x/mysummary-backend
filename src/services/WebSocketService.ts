import RequestService from "@services/RequestService"
import socketIo from 'socket.io'
import { schedule } from 'node-cron'
import fsExtra from 'fs-extra'
import path from "path"

export default class WebSocketService {
  private requestQuantity: number = 0
  private requestId: string = ''
  private requestService: RequestService = new RequestService()

  constructor(
    private socket: socketIo.Server
  ) {}

  async start(): Promise<void> {
    this.requestId = await this.requestService.createNewRequestInDatabase()

    this.socket.on('connection', async () => {
      this.requestQuantity = await this.requestService.getRequestQuantity(this.requestId)
      this.emitRequestQuantity()
    })

    schedule('59 23 * * *', async () => {
      fsExtra.emptyDir(path.resolve(__dirname, '..', 'pdfs'))
      this.requestId = await this.requestService.createNewRequestInDatabase()
      this.requestQuantity = await this.requestService.getRequestQuantity(this.requestId)

      this.emitRequestQuantity()
    })
  }

  async updateRequestQuantity(): Promise<void> {
    this.requestQuantity = await this.requestService.updateRequestQuantity(this.requestId)
    this.emitRequestQuantity()
  }

  emitRequestQuantity(): void {
    this.socket.emit('requestQuantity', {
      requestQuantity: this.requestQuantity,
      canRequest: this.requestQuantity < 100
    })
  }
}
