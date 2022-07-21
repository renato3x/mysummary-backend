import { Router } from 'express'
const router = Router()

//middlewares
import rateLimit from '@middlewares/rateLimit'

//controllers
import PdfController from '@controllers/pdfController'
import IndexController from '@controllers/IndexController'

// index routes
router.get('/', IndexController.index)

//pdf routes
router.post('/pdf', rateLimit, PdfController.create)
router.get('/pdf/:pdfName', PdfController.getPdf)

export default router
