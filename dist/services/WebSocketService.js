"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _RequestService = require('./RequestService'); var _RequestService2 = _interopRequireDefault(_RequestService);
var _nodecron = require('node-cron'); var _nodecron2 = _interopRequireDefault(_nodecron);
var _fsextra = require('fs-extra'); var _fsextra2 = _interopRequireDefault(_fsextra);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

 class WebSocketService {
  constructor(serverSocket, clientSocket) {
    this.serverSocket = serverSocket
    this.clientSocket = clientSocket

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

    _nodecron2.default.schedule('59 23 * * *', async () => {
      _fsextra2.default.emptyDir(_path2.default.resolve(__dirname, '..', 'pdfs'))
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
} exports.default = WebSocketService;
