import { NewUser } from '../types'

const parseUsername = (inputUsername: any): string => {
  if (!isString(inputUsername)) {
    throw new Error('Nombre de usuario incorrecto o no presente')
  }
  return inputUsername
}
const parsePassword = (inputPassword: any): string => {
  if (!isString(inputPassword)) {
    throw new Error('Contraseña incorrecta o no presente')
  }
  return inputPassword
}
const parseEmail = (inputEmail: any): string => {
  if (!isString(inputEmail)) {
    throw new Error('Email incorrecto o no presente')
  }
  return inputEmail
}

const parseFullname = (inputFullname: any): string => {
  if (!isString(inputFullname)) {
    throw new Error('Nombre completo incorrecto o no presente')
  }
  return inputFullname
}

const parseBirthdate = (inputBirthdate: any): string => {
  if (!isString(inputBirthdate)) {
    throw new Error('Fecha de nacimiento incorrecta o no presente')
  }
  return inputBirthdate
}

const parseDeposit = (inputDeposit: any): number => {
  if (!isNumber(inputDeposit)) {
    throw new Error('Depósito incorrecto o no presente')
  }
  return inputDeposit
}

const parseBoolean = (inputBoolean: any): string => {
  if (!isBoolean(inputBoolean)) {
    throw new Error('Booleano incorrecto o no presente')
  }
  return inputBoolean ? 'active' : 'inactive'
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const isBoolean = (boolean: boolean): boolean => {
  return typeof boolean === 'boolean'
} 

const parseInputUser = (object: any): NewUser => {
  const newUser: NewUser = {
    username: parseUsername(object.username),
    password: parsePassword(object?.password),
    email: parseEmail(object.email),
    fullname: parseFullname(object.fullname),
    birthdate: parseBirthdate(object.birthdate),
    deposit: parseDeposit(object.deposit)
  }

  return newUser
}

const parseInputLogin = (object: any): NewUser => {
  const newUser: NewUser = {
    email: parseUsername(object.email),
    password: parsePassword(object.password)
  }

  return newUser
}

export {
  parseInputUser,
  parseInputLogin,
  parseBoolean
}
