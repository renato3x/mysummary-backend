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

  it('Should be return a not null object', () => {
    expect(requestService).not.toBeNull()
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})
