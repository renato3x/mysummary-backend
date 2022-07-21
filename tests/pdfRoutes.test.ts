import mongoose from 'mongoose'
import request from 'supertest'
import { server } from '../src/app'

let pdfUrl: string = ''
let i = 0

beforeEach((done) => {
  if (i == 1 || i == 2 || i == 4) {
    setTimeout(() => {
      done()
    }, 60000)
  } else {
    done()
  }

  i++
}, 61000)

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
  }, 30000)

  it('It should return status 201 when the pdf is generated correctly along with an object with the url to access the generated pdf', async () => {
    const response = await request(server)
    .post('/pdf')
    .send({
      title: 'REST APIs',
      url: 'https://pt.wikipedia.org/wiki/REST'
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.pdfUrl).toBeDefined()

    pdfUrl = response.body.pdfUrl.split(process.env.APPLICATION_URL)[1]
  }, 30000)

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
  it('Should return an pdf file by filename', (done) => {
    request(server)
    .get(pdfUrl)
    .end((error, response) => {
      if (error) {
        throw error
      }

      expect(response.get('Content-Type')).toContain('application/pdf')

      done()
    })
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
