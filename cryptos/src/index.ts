import express from 'express'
import cors from 'cors'
require('dotenv').config()
import cryptoRouter from './routes/crypto.route'
import logger from './utils/log.utils'

const app = express()
app.use(express.json())

const allowedOrigins = ['http://localhost:5000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))

app.get('/ping', (_req, res) => {
  logger.info('someone pinged here' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/cryptos', cryptoRouter)

app.listen(process.env.CRYPTOS_PORT, () => {
  logger.info(`Server running on port ${process.env.CRYPTOS_PORT}`)
})
