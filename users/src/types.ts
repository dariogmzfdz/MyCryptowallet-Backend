export interface User {
  userId?: string
  username?: string
  password: string
  email: string
  fullname?: string
  birthdate?: string
  deposit?: number
}

export type NewUser = User
