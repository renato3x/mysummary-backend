import { Router } from 'express'
const router = Router()

//controllers
import indexController from './controllers/indexController'
import pdfCreatorController from './controllers/pdfCreatorController'

//index route
router.get('/', indexController.index)

//pdf creator routes
router.post('/pdf', pdfCreatorController.create)

export default router
