import RequestService from "@services/RequestService"
import connection from "@database/connection"
import mongoose from "mongoose"

beforeAll((done) => {
  connection.then(() => {
    done()
  })
})

describe('RequestService methods', () => {
  const requestService = new RequestService()

  it('Should generate a new request in database and return the id', async () => {
    const result = await requestService.createNewRequestInDatabase()
    expect(typeof result).toBe('string')
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
