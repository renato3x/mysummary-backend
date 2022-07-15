import { request as req, response as res } from 'express'
import textSummarizeService from '../services/textSummarizeService'
import htmlService from '../services/htmlGeneratorService'
import pdfService from '../services/pdfGeneratorService'
import path from 'path'
import { io } from '../app'

export default {
  async create(request = req, response = res) {
    const {
      pdfTitle,
      url,
    } = request.body

    if (!pdfTitle || !url) {
      return response.status(400).json({ message: 'Insufficient data to generate the pdf' })
    }

    try {
      const { sm_api_content: data } = await textSummarizeService(url, 7)
      const textsArray = data.split('[BREAK]')
      const dataToCreatePDF = { title: pdfTitle, textsArray }

      try {
        const html = await htmlService(dataToCreatePDF)

        const pdfName = `${Date.now()}_${pdfTitle.replace(/ /g, '_').toLowerCase()}.pdf`
        await pdfService(html, path.resolve(__dirname, '..', 'pdfs', pdfName))

        io.emit('updateRequestQuantity', {})

        return response.status(201).json({ pdfUrl: `${process.env.APPLICATION_URL}/pdf/${pdfName}` })
      } catch (error) {
        return response.status(500).json({ message: 'Error generating pdf file' })
      }

    } catch({ status, message }) {
      return response.status(status).json({ message })
    }
  },

  async getPdf(request = req, response = res) {
    const {
      pdfName
    } = request.params

    const pdfFilePath = path.join(__dirname, '..', 'pdfs', pdfName)

    return response.sendFile(pdfFilePath)
  }
}
