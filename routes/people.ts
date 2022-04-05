import express, { Router } from 'express'
import peopleController from '../controllers/people'

const router: Router = express.Router()
router.get('/', peopleController.list)
router.get('/:id', peopleController.get)
router.post('/', peopleController.create)

export default router