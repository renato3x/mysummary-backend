import mongoose from 'mongoose'
import request from 'supertest'
import { server } from '../src/app'

describe('GET /', () => {
  it('Should return that the response status is 200', async () => {
    const response = await request(server).get('/')

    expect(response.statusCode).toBe(200)
  })

  it('Should return that the Content-Type header of the response is a json', async () => {
    const response = await request(server).get('/')
    const contentType = response.get('Content-Type')

    expect(contentType).toContain('json')
  })

  it('Should return an object with the message property in the response body', async () => {
    const response = await request(server).get('/')

    expect(response.body.message).toBeDefined()
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
