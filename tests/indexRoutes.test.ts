import mongoose from 'mongoose'
import request from 'supertest'
import { server, io } from '../src/app'

describe('GET /', () => {
  
  it('Should return an object with the message property in the response body', async () => {
    const response = await request(server).get('/').expect(200)

    expect(response.body.message).toBeDefined()
  })
})

afterAll(done => {
  io.close()
  server.close()
  mongoose.connection.close()
  done()
})
