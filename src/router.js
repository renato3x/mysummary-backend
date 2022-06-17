import { Router } from 'express'
const router = Router()

//middlewares
import rateLimit from './middlewares/rateLimit'

//controllers
import indexController from './controllers/indexController'
import pdfController from './controllers/pdfController'

//index route
router.get('/', indexController.index)

//pdf routes
router.post('/pdf', rateLimit, pdfController.create)
router.get('/pdf/:pdfName', pdfController.getPdf)

export default router
