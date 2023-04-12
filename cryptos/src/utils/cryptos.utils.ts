import { UserCrypto, Crypto } from '../types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const parseCryptoId = (cryptoId: any): string => {
  if (!cryptoId || !isString(cryptoId)) {
    throw new Error('Incorrect or missing crypto id: ' + cryptoId)
  }
  return cryptoId
}

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name: ' + name)
  }
  return name
}

const parseValue = (value: any): number => {
  if (!value || isNumber(value)) {
    throw new Error('Incorrect or missing value: ' + value)
  }
  return value
}

const parseIcon = (icon: any): string => {
  if (!icon || !isString(icon)) {
    throw new Error('Incorrect or missing icon: ' + icon)
  }
  return icon
}

const parseAsset = (asset: any): string => {
  if (!asset || !isString(asset)) {
    throw new Error('Incorrect or missing asset: ' + asset)
  }
  return asset
}

const parseStock = (stock: any): number => {
  if (!stock || !isNumber(stock)) {
    throw new Error('Incorrect or missing stock: ' + stock)
  }
  return stock
}

const parseUserId = (userId: any): string => {
  if (!userId || !isString(userId)) {
    throw new Error('Incorrect or missing user id: ' + userId)
  }
  return userId
}

const parseAmount = (amount: any): number => {
  if (!amount || isNaN(amount)) {
    throw new Error('Incorrect or missing amount: ' + amount)
  }
  return amount
}

const parseCrypto = (object: any): Crypto => {
  const newCrypto: Crypto = {
    cryptoId: parseCryptoId(object.cryptoId),
    name: parseName(object.name),
    value: parseValue(object.value),
    icon: parseIcon(object.icon),
    asset: parseAsset(object.asset),
    stock: parseStock(object.stock)
  }

  return newCrypto
}

const parseUserCrypto = (object: any): UserCrypto => {
  const newUserCrypto: UserCrypto = {
    cryptoId: parseCryptoId(object.cryptoId),
    userId: parseUserId(object.userId),
    amount: parseAmount(object.amount)
  }

  return newUserCrypto
}

export {
  parseUserCrypto,
  parseCrypto
}
