import connection from "../src/database/connection";

it('Should return the connection data', async () => {
  const data = await connection

  expect(data).toBeDefined()
})
