"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const router = _express.Router.call(void 0, )

//middlewares
var _rateLimit = require('./middlewares/rateLimit'); var _rateLimit2 = _interopRequireDefault(_rateLimit);

//controllers
var _indexController = require('./controllers/indexController'); var _indexController2 = _interopRequireDefault(_indexController);
var _pdfCreatorController = require('./controllers/pdfCreatorController'); var _pdfCreatorController2 = _interopRequireDefault(_pdfCreatorController);

//index route
router.get('/', _indexController2.default.index)

//pdf creator routes
router.post('/pdf', _rateLimit2.default, _pdfCreatorController2.default.create)

exports. default = router
