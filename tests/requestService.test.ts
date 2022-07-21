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
  let requestId = ''

  it('Should generate a new request in database and return the id', async () => {
    requestId = await requestService.createNewRequestInDatabase()
    expect(typeof requestId).toBe('string')
  })

  it('Should update the quantity of requests of the current request and return the new quantity of requests', async () => {
    const requestQuantity = await requestService.updateRequestQuantity(requestId)
    expect(typeof requestQuantity).toBe('number')
  })

  it('Should return the quantity of the request the current request', async () => {
    const requestQuantity = await requestService.getRequestQuantity(requestId)
    expect(typeof requestQuantity).toBe('number')
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
