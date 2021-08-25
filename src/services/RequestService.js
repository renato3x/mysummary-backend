import Request from '../database/models/Request'

export default class RequestService {
  async createNewRequestInDatabase() {
    try {
      const date = new Date()

      const requestAlreadyExists = await Request.findOne({
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      })

      if (requestAlreadyExists) {
        return requestAlreadyExists._id.toString()
      } else {
        const request = new Request()
        await request.save()
  
        return request._id.toString()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
