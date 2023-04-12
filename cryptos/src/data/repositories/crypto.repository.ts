import { connect } from '../config/crypto.db.config'
import { Cryptos as DBCryptos } from '../model/crypto.model'
import { UserCryptos as DBUserCryptos } from '../model/userCrypto.model'
import logger from '../../utils/log.utils'

export class CryptoRepository {
  private db: any
  private cryptoRepository: any
  private userCryptosRepository: any

  constructor() {
    this.db = connect()
    this.cryptoRepository = this.db.sequelize.getRepository(DBCryptos)
    this.userCryptosRepository = this.db.sequelize.getRepository(DBUserCryptos)
  }

  async getAllCryptos(): Promise<DBCryptos[]> {
    try {
      const cryptos = await this.cryptoRepository.findAll()
      console.log('cryptos:::', cryptos)

      return cryptos
    } catch (err) {
      logger.error('An error occurred when retrieving cryptos.')
      logger.error(err)

      return []
    }
  }

  async updateCrypto(crypto: DBCryptos): Promise<string> {
      this.cryptoRepository.update({ stock: crypto.stock }, { where: { cryptoId: crypto.cryptoId } })
      return 'Updated'
  }

  async getUserCryptos(): Promise<DBUserCryptos[]> {
    try {
      const userCryptos = await this.userCryptosRepository.findAll()
      console.log('userCryptos:::', userCryptos)

      return userCryptos
    } catch (err) {
      logger.error('An error occurred when retrieving the user cryptos.')
      logger.error(err)
      return []
    }
  }

  async updateUserCrypto(userCrypto: DBUserCryptos): Promise<string> {
    const data = await this.userCryptosRepository.findOne({ where: {
      userId: userCrypto.userId,
      cryptoId: userCrypto.cryptoId
    }})
    if (!!data) {
      this.userCryptosRepository.update({ amount: userCrypto.amount }, { where: {
        userId: userCrypto.userId,
        cryptoId: userCrypto.cryptoId
      }})
      return 'Updated'
    } else {
      this.userCryptosRepository.create(userCrypto)
      return 'Created'
    }
  }

  async deleteUserCrypto(userCrypto: DBUserCryptos): Promise<string> {
    const data = await this.userCryptosRepository.findOne({ where: {
      userId: userCrypto.userId,
      cryptoId: userCrypto.cryptoId
    }})
    if (!!data) {
      this.userCryptosRepository.destroy({ where: {
        userId: userCrypto.userId,
        cryptoId: userCrypto.cryptoId
      }})
      return 'Deleted'
    } else {
      return 'Not found'
    }
  }
}
