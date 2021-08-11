"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _textSummarizeService = require('../services/textSummarizeService'); var _textSummarizeService2 = _interopRequireDefault(_textSummarizeService);
var _htmlGeneratorService = require('../services/htmlGeneratorService'); var _htmlGeneratorService2 = _interopRequireDefault(_htmlGeneratorService);
var _pdfGeneratorService = require('../services/pdfGeneratorService'); var _pdfGeneratorService2 = _interopRequireDefault(_pdfGeneratorService);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _app = require('../app'); var _app2 = _interopRequireDefault(_app);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config({path: _path2.default.resolve(__dirname, '..', '..', '.env')})

exports. default = {
  async create(request = _express.request, response = _express.response) {
    const {
      pdfTitle,
      url,
    } = request.body

    if (!pdfTitle || !url) {
      return response.status(400).json({ message: 'Insufficient data to generate the pdf' })
    }

    try {
      const { sm_api_content: data } = await _textSummarizeService2.default.call(void 0, url, 7)
      const textsArray = data.split('[BREAK]')
      const dataToCreatePDF = { title: pdfTitle, textsArray }

      try {
        const html = await _htmlGeneratorService2.default.call(void 0, dataToCreatePDF, _path2.default.resolve(__dirname, '..', 'template', 'index.ejs'))

        const pdfName = `${Date.now()}-${pdfTitle.replace(/ /g, '_').toLowerCase()}.pdf`
        await _pdfGeneratorService2.default.call(void 0, html, _path2.default.resolve(__dirname, '..', 'pdfs', pdfName))

        _app2.default.emit('updateRequestQuantity', {})

        return response.status(201).json({ pdfUrl: `${process.env.APPLICATION_URL}/pdfs/${pdfName}` })
      } catch (error) {
        return response.status(500).json({ message: 'Error generating pdf file' })
      }

    } catch({ status, message }) {
      return response.status(status).json({ message })
    }
  }
}
