import express from 'express'
import { userController } from '../controllers/user.controller'

/* const userAuth = require('../middleware/userAuth') */

const router = express.Router()

router.get('/', userController.getUsers)

router.get('/:id', userController.getUserById)

router.post('/signup', userController.addUser)

router.post('/login', userController.login)

router.put('/update', userController.updateUser)

export default router

module.exports = router
