import express from 'express'
import { apiGatewayController } from './api-gateway.controller'

const router = express.Router()

router.get('/*', apiGatewayController.redirect)
router.post('/*', apiGatewayController.redirect)
router.put('/*', apiGatewayController.redirect)
router.delete('/*', apiGatewayController.redirect)

export default router

module.exports = router