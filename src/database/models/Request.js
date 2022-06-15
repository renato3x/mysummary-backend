import { model, Schema } from 'mongoose'

export default model('Request', new Schema({
  quantity: {
    type: Number,
    default: 0
  },
  day: {
    type: Number,
    default: new Date().getDate()
  },
  month: {
    type: Number,
    default: new Date().getMonth() + 1
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
  }
}))
