import express from 'express'
import userController from '../controllers/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', authMiddleware.authenticateJWT, userController.getAllUsers)
router.get('/:id', authMiddleware.authenticateJWT, userController.getUser)

export default router
