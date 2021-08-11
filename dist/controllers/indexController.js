"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

exports. default = {
  index(request = _express.request, response = _express.response) {
    return response.json({ message: 'This is an automatic PDF generation API created by Renato Pereira. Visit my Github: https://github.com/renato3x/' })
  }
}
