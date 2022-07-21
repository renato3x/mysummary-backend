import pdf from 'html-pdf'

export default function pdfGeneratorService(html: string, outputSrc: string) {
  return new Promise((resolve, reject) => {
    pdf.create(html).toFile(outputSrc, (error: Error) => {
      if (error) {
        reject(error)
      } else {
        resolve({ created: true })
      }
    })
  })
}
