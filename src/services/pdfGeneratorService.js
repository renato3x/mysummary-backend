import pdf from 'html-pdf'

export default (html, src) => {
  return new Promise((resolve, reject) => {
    pdf.create(html).toFile(src, error => {
      error ? reject(error) : resolve()
    })
  })
}
