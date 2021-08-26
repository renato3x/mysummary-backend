"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _http = require('http');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _socketio = require('socket.io'); var _socketio2 = _interopRequireDefault(_socketio);
var _socketioclient = require('socket.io-client');
var _WebSocketService = require('./services/WebSocketService'); var _WebSocketService2 = _interopRequireDefault(_WebSocketService);

//.dot env init
_dotenv2.default.config({path: _path2.default.join(__dirname, '..', '.env')})

//server instance
const app = _express2.default.call(void 0, )
const server = _http.Server.call(void 0, app)
const io = _socketio2.default.call(void 0, server, {
  cors: {
    origin: '*'
  }
})

//initializing cors
app.use(_cors2.default.call(void 0, ))

//body parsing
app.use(_express2.default.urlencoded({ extended: false }))
app.use(_express2.default.json())

//database connection
require('./database/connection');

//socket io
const webSocketService = new (0, _WebSocketService2.default)(io, _socketioclient.io.call(void 0, `${process.env.APPLICATION_URL}`))
webSocketService.start()

//routes
var _router = require('./router'); var _router2 = _interopRequireDefault(_router);
app.use(_router2.default)
app.use('/pdfs', _express2.default.static(_path2.default.join(__dirname, 'pdfs')))

//server init
const port = process.env.PORT || 3333
server.listen(port, () => {
  console.log(`Server open in port ${port}`)
})

exports. default = io