"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

exports. default = _mongoose.model.call(void 0, 'Request', new (0, _mongoose.Schema)({
  quantity: {
    type: Number,
    default: 0
  },
  day: {
    type: Number,
    default: new Date().getDate()
  },
  month: {
    type: Number,
    default: new Date().getMonth() + 1
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
  }
}))