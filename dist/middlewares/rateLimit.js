"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _expressratelimit = require('express-rate-limit'); var _expressratelimit2 = _interopRequireDefault(_expressratelimit);

exports. default = _expressratelimit2.default.call(void 0, {
  windowMs: 60 * 1000,
  max: 1,
  keyGenerator(request, response) {
    return request.ip
  },
  handler(request, response) {
    return response.status(429).json({
      message: 'Too many requests. Please, wait a little bit'
    })
  }
})