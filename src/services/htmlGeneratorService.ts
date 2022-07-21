import { PdfContent } from "src/@types";
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

export default function htmlGeneratorService(pdfContent: PdfContent): string {
  const { title, paragraphs } = pdfContent
  const baseHTML = fs.readFileSync(path.join(__dirname, '..', 'templates', 'pdf-base.html'), { encoding: 'utf-8' })
  const { document } = new JSDOM(baseHTML).window

  const h1 = document.createElement('h1')
  h1.innerHTML = title

  document.body.appendChild(h1)
  document.body.appendChild(document.createElement('hr'))

  paragraphs.forEach(paragraph => {
    const p = document.createElement('p')
    p.innerHTML = paragraph
    document.body.appendChild(p)
  })

  return document.documentElement.outerHTML
}
