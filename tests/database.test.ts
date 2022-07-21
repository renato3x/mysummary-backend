import connection from "@database/connection";
import mongoose from "mongoose";

it('Should return the connection data', async () => {
  const data = await connection

  expect(data).toBeDefined()

})

afterAll(done => {
  mongoose.connection.close()
  done()
})
