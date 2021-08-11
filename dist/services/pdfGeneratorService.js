"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _htmlpdf = require('html-pdf'); var _htmlpdf2 = _interopRequireDefault(_htmlpdf);

exports. default = (html, src) => {
  return new Promise((resolve, reject) => {
    _htmlpdf2.default.create(html).toFile(src, error => {
      error ? reject(error) : resolve()
    })
  })
}
