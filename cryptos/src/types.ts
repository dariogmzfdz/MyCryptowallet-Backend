export interface Crypto {
  cryptoId?: string
  name: string
  value: number
  icon: string
  asset: string
  stock: number
}

export interface UserCrypto {
  userId: string
  cryptoId: string
  amount: number
}