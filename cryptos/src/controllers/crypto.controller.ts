import { CryptoService } from '../services/crypto.service'
import { parseUserCrypto, parseCrypto } from '../utils/cryptos.utils'

const cryptoService: CryptoService = new CryptoService()

export const cryptoController = {
  getAllCryptos: (_req: any, res: any) => {
    cryptoService.getAllCryptos().then(result => {
      res.send(result)
    })
  },
  updateCrypto: (req: any, res: any) => {
    try {
      const crypto = parseCrypto(req.body)
      cryptoService.updateCrypto(crypto).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  getUserCryptos: (_req: any, res: any) => {
    cryptoService.getUserCryptos().then(result => {
      res.json(result)
    })
  },
  updateUserCrypto: (req: any, res: any) => {
    try {
      const userCrypto = parseUserCrypto(req.body)
      cryptoService.updateUserCrypto(userCrypto).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  deleteUserCrypto: (req: any, res: any) => {
    try {
      const userCrypto = parseUserCrypto(req.body)
      cryptoService.deleteUserCrypto(userCrypto).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  }
}
