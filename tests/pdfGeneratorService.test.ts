import pdfGeneratorService from "@services/pdfGeneratorService";
import fs from "fs";
import path from "path";

describe('Pdf Generator Service', () => {
  it('Should return a object informing that the pdf was generated', async () => {
    const html = fs.readFileSync(path.join(__dirname, 'config', 'html_test_file.html'), { encoding: 'utf-8' })
    const output = path.join(__dirname, 'config', 'pdfs', 'output.pdf')

    await expect(pdfGeneratorService(html, output)).resolves.toEqual({ created: true })
  })
})
