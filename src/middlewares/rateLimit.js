import rateLimit from 'express-rate-limit'

export default rateLimit({
  windowMs: 60 * 1000,
  max: 1,
  keyGenerator(request, response) {
    return request.ip
  },
  handler(request, response) {
    return response.status(429).json({
      message: 'Too many requests. Please, wait a little bit'
    })
  }
})