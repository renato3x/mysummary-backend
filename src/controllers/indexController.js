import { request as req, response as res } from 'express'

export default {
  index(request = req, response = res) {
    return response.json({ message: 'This is an automatic PDF generation API created by Renato Pereira. Visit my Github: https://github.com/renato3x/' })
  }
}
