import { Router } from 'express'
const router = Router()

//controllers
import PdfController from '@controllers/pdfController'
import IndexController from '@controllers/IndexController'

// index routes
router.get('/', IndexController.index)

//pdf routes
router.post('/pdf', PdfController.create)
router.get('/pdf/:pdfName', PdfController.getPdf)

export default router
