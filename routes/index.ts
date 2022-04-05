import express, { Router } from 'express'
import peopleRouter from './people'

const router: Router = express.Router()
router.use('/people', peopleRouter)

export default router