"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _axios = require('axios'); var ax = _interopRequireWildcard(_axios);

const smmry_api_key = process.env.SMMRY_API_KEY
const axios = ax.default

exports. default = (URL, length = 7) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`https://api.smmry.com/?SM_API_KEY=${smmry_api_key}&SM_LENGTH=${length}&SM_WITH_BREAK&SM_URL=${URL}`)
      resolve(data)
    } catch (error) {
      const { data: responseError } = error.response
      if (responseError.sm_api_message === 'THE PAGE IS IN AN UNRECOGNISABLE FORMAT') {
        reject({ status: 400, message: 'Invalid page to create a summary' })
      } else {
        reject({ status: 500, message: 'Error generating summary' })
      }
    }
  })
}
