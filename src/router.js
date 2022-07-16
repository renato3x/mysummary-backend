import { Router } from 'express'
const router = Router()

//middlewares
import rateLimit from './middlewares/rateLimit'

//controllers
import pdfController from './controllers/pdfController'
import IndexController from './controllers/IndexContoller'

// index routes
router.get('/', IndexController.index)

//pdf routes
router.post('/pdf', rateLimit, pdfController.create)
router.get('/pdf/:pdfName', pdfController.getPdf)

export default router
