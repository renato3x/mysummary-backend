"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _RequestService = require('./RequestService'); var _RequestService2 = _interopRequireDefault(_RequestService);

 class WebSocketService {
  constructor(serverSocket, clientSocket) {
    this.serverSocket = serverSocket
    this.clientSocket = clientSocket

    this.date = new Date()
    this.requestQuantity = 0
    this.requestId = ''
    this.requestService = new (0, _RequestService2.default)()
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

    setInterval(async () => {
      const actualDate = new Date()

      if (actualDate.getDate() != this.date.getDate()) {
        this.date = actualDate
        this.requestQuantity = 0
        this.requestId = await this.requestService.createNewRequestInDatabase()

        this.emitRequestQuantity()
      }
    }, 60 * 1000)
  }

  emitRequestQuantity() {
    this.serverSocket.emit('requestQuantity', {
      requestQuantity: this.requestQuantity,
      canRequest: this.requestQuantity < 100
    })
  }
} exports.default = WebSocketService;
