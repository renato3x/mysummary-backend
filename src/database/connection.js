import mongoose from 'mongoose'

export default mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(connection => {
  console.log('Connected with database')
  return connection
}).catch(error => {
  console.log('Error occurred', error)
})
