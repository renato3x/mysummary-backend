export default class WebSocketService {
  constructor(serverSocket, clientSocket) {
    this.serverSocket = serverSocket
    this.clientSocket = clientSocket

    this.date = new Date()
    this.requestQuantity = 0
  }

  start() {
    this.serverSocket.on('connection', socket => {
      socket.emit('requestQuantity', {
        requestQuantity: this.requestQuantity,
        canRequest: this.requestQuantity < 100
      })
    })

    this.clientSocket.on('updateRequestQuantity', () => {
      this.requestQuantity++

      this.serverSocket.emit('requestQuantity', {
        requestQuantity: this.requestQuantity,
        canRequest: this.requestQuantity < 100
      })
    })

    setInterval(() => {
      const actualDate = new Date()

      if (actualDate.getDate() != this.date.getDate()) {
        this.date = actualDate
        this.requestQuantity = 0

        this.serverSocket.emit('requestQuantity', {
          requestQuantity: this.requestQuantity,
          canRequest: this.requestQuantity < 100
        })
      }
    }, 60 * 1000)
  }
}
