import Request from "@database/models/Request"

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
      throw new Error('Error at create new request')
    }
  }

  async updateRequestQuantity(id: any) {
    try {
      const request = await Request.findById(id)

      if (request) {
        request.quantity++
        await request.save()
  
        return request.quantity
      }

      throw new Error('Request do not exists')
    } catch (error) {
      throw new Error('Error at update request')
    }
  }

  async getRequestQuantity(id: any) {
    try {
      const request = await Request.findById(id)
      
      if (request) {
        return request.quantity
      }

      throw new Error('Request do not exists')
    } catch (error) {
      throw new Error('Error at retrieve the request quantity')
    }
  }
}
