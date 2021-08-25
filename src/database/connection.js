import mongoose from 'mongoose'

export default mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected with database')
}).catch(error => {
  console.log('Error occurred', error)
})