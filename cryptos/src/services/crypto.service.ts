import { Crypto, UserCrypto } from '../types'
import { Cryptos as DBCryptos } from '../data/model/crypto.model'
import { UserCryptos as DBUserCryptos } from '../data/model/userCrypto.model'
import { CryptoRepository } from '../data/repositories/crypto.repository'

export class CryptoService {
  private cryptoRepository: CryptoRepository

  constructor () {
    this.cryptoRepository = new CryptoRepository()
  }

  async getAllCryptos (): Promise<Crypto[]> {
    const cryptos = await this.cryptoRepository.getAllCryptos()
    return cryptos
  }

  async updateCrypto (crypto: Crypto): Promise<string> {
    var cryptoPojo : DBCryptos = crypto as DBCryptos
    const updatedCrypto = await this.cryptoRepository.updateCrypto(cryptoPojo)
    return updatedCrypto
  }

  async getUserCryptos (): Promise<UserCrypto[]> {
    const userCryptos = await this.cryptoRepository.getUserCryptos()
    return userCryptos
  }

  async updateUserCrypto (userCrypto: UserCrypto): Promise<string> {
    var userCryptoPojo : DBUserCryptos = userCrypto as DBUserCryptos
    const updatedUserCrypto = await this.cryptoRepository.updateUserCrypto(userCryptoPojo)
    return updatedUserCrypto
  }

  async deleteUserCrypto (userCrypto: UserCrypto): Promise<string> {
    var userCryptoPojo : DBUserCryptos = userCrypto as DBUserCryptos
    const deletedUserCrypto = await this.cryptoRepository.deleteUserCrypto(userCryptoPojo)
    return deletedUserCrypto
  }
}

export const mapCryptoResult = (crypto: DBCryptos): Crypto => {
  const returnCrypto = {
    cryptoId: crypto.cryptoId,
    name: crypto.name,
    value: crypto.value,
    icon: crypto.icon,
    asset: crypto.asset,
    stock: crypto.stock
  }

  return returnCrypto
}

export const mapUserCryptoResult = (userCrypto: DBUserCryptos): UserCrypto => {
  const returnUserCrypto = {
    userId: userCrypto.userId,
    cryptoId: userCrypto.cryptoId,
    amount: userCrypto.amount
  }

  return returnUserCrypto
}
