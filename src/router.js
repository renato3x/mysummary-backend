import { Router } from 'express'
const router = Router()

//middlewares
import rateLimit from './middlewares/rateLimit'

//controllers
import indexController from './controllers/indexController'
import pdfCreatorController from './controllers/pdfCreatorController'

//index route
router.get('/', indexController.index)

//pdf creator routes
router.post('/pdf', rateLimit, pdfCreatorController.create)

export default router
