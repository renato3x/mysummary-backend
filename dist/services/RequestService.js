"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Request = require('../database/models/Request'); var _Request2 = _interopRequireDefault(_Request);

 class RequestService {
  async createNewRequestInDatabase() {
    try {
      const date = new Date()

      const requestAlreadyExists = await _Request2.default.findOne({
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      })

      if (requestAlreadyExists) {
        return requestAlreadyExists._id.toString()
      } else {
        const request = new (0, _Request2.default)()
        await request.save()
  
        return request._id.toString()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async updateRequestQuantity(id) {
    try {
      const request = await _Request2.default.findById(id)
      request.quantity++
      await request.save()

      return request.quantity
    } catch (error) {
      console.log(error)
    }
  }

  async getRequestQuantity(id) {
    try {
      const request = await _Request2.default.findById(id)
      return request.quantity
    } catch (error) {
      console.log(error)
    }
  }
} exports.default = RequestService;
