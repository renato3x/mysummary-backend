import mongoose from 'mongoose'

const connectionUrl = process.env.MONGODB_CONNECTION_URL as string

export default mongoose.connect(connectionUrl).then(connection => {
  return connection
}).catch(error => {
  console.log('Error occurred', error)
})
