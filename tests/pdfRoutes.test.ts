import mongoose from 'mongoose'
import request from 'supertest'
import { server } from '../src/app'

let pdfUrl: string = ''

describe('POST /pdf', () => {
  it('Should return status 400 if required parameters in request body are not passed', async () => {
    const response = await request(server).post('/pdf')

    expect(response.statusCode).toBe(400)
  })

  it('Should return status 400 if the url passed as a parameter in the request body is not valid', async () => {
    const response = await request(server)
    .post('/pdf')
    .send({
      title: 'Some cool title',
      url: 'http://google.com'
    })

    expect(response.statusCode).toBe(400)
  })

  it('It should return status 201 when the pdf is generated correctly along with an object with the url to access the generated pdf', async () => {
    const response = await request(server)
    .post('/pdf')
    .send({
      title: 'REST APIs',
      url: 'https://pt.wikipedia.org/wiki/REST'
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.pdfUrl).toBeDefined()

    pdfUrl = response.body.pdfUrl
  })

  it('Should stop generating a new pdf in less than a minute', async () => {
    const response = await request(server)
    .post('/pdf')
    .send({
      title: 'REST APIs',
      url: 'https://pt.wikipedia.org/wiki/REST'
    })

    expect(response.statusCode).toBe(429)
  })
})

describe('GET /pdf', () => {
  it('Should return an pdf file by filename', async () => {
    const response = await request(server).get(pdfUrl)

    expect(response.headers['Content-Type']).toMatch(/pdf/)
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
