"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ejs = require('ejs'); var _ejs2 = _interopRequireDefault(_ejs);

exports. default = (data, templateSRC) => {
  return new Promise((resolve, reject) => {
    _ejs2.default.renderFile(templateSRC, {...data}, (error, html) => {
      error ? reject(error) : resolve(html)
    })
  })
}
