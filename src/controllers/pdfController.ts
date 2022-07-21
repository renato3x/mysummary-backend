import path from 'path'
import slugify from 'slugify'
import { Request, Response } from 'express'
import { PdfContent, PdfCreationApiResponse, PdfCreationRequestBody } from 'src/@types'
import htmlGeneratorService from '@services/htmlGeneratorService'
import textSummarizeService from '@services/textSummarizeService'
import pdfGeneratorService from '@services/pdfGeneratorService'
import { webSocketService } from '../app'

export default class PdfController {
  static async create(request: Request, response: Response) {
    const { title, url } = request.body as PdfCreationRequestBody

    if (!title || !url) {
      return response.status(400).json({
        message: 'Insufficient data to generate the pdf'
      })
    }

    try {
      const { sm_api_content: content } = await textSummarizeService(url)
      const paragraphs = content.split('[BREAK]')
      const pdfContent: PdfContent = { title, paragraphs }

      try {
        const html = htmlGeneratorService(pdfContent)
        const slugTitle = slugify(title, { replacement: '_', lower: true })
        const pdfName = `${Date.now()}_${slugTitle}.pdf`
        const pdfFinalPath = path.join(__dirname, '..', 'pdfs', pdfName)

        await pdfGeneratorService(html, pdfFinalPath)

        webSocketService.updateRequestQuantity()

        const jsonResponse: PdfCreationApiResponse = {
          pdfUrl: `${process.env.APPLICATION_URL}/pdf/${pdfName}`
        }

        return response.status(201).json(jsonResponse)
      } catch (error) {
        return response.status(500).json({ message: 'Error at generate pdf file' })  
      }
    } catch (error: any) {
      const { status, message } = error
      return response.status(status).json({ message })
    }
  }

  static async getPdf(request: Request, response: Response) {
    const { pdfName } = request.params

    const pdfFilePath = path.join(__dirname, '..', 'pdfs', pdfName)

    return response.setHeader('Content-Type', 'application/pdf').sendFile(pdfFilePath)
  }
}
