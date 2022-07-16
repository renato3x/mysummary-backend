import { Router } from 'express'
const router = Router()

//middlewares
import rateLimit from './middlewares/rateLimit'

//controllers
import pdfController from './controllers/pdfController'

//pdf routes
router.post('/pdf', rateLimit, pdfController.create)
router.get('/pdf/:pdfName', pdfController.getPdf)

export default router
