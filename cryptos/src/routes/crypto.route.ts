import express from 'express'
import { cryptoController } from '../controllers/crypto.controller'

const cryptoRouter = express.Router()

cryptoRouter.get('/', cryptoController.getAllCryptos)

cryptoRouter.get('/userCryptos', cryptoController.getUserCryptos)

cryptoRouter.put('/update', cryptoController.updateCrypto)

cryptoRouter.put('/updateUC', cryptoController.updateUserCrypto)

cryptoRouter.post('/delete', cryptoController.deleteUserCrypto)

export default cryptoRouter

module.exports = cryptoRouter
