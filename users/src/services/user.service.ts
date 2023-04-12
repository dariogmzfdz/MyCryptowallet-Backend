import { NewUser, User} from '../types'
import { Users as DBUsers } from '../data/model/user.model'
import { UserRepository } from '../data/repositories/user.repository'

export class UserService {
  private userRepository: UserRepository

  constructor () {
    this.userRepository = new UserRepository()
  }

  async getUsers (): Promise<User[]> {
    const userPromise = await this.userRepository.getAllUsers().then(result => {
      const users: User[] = []
      result.forEach(dbUser => {
        users.push(parsePojoIntoDto(dbUser))
      })
      return users
    }).catch(err => {
      console.error('An error occurred when retrieving users.')
      console.error(err)
      throw (err)
    })
    return userPromise
  }

  async getUserById (id: number): Promise<User | undefined> {
    const userPromise = await this.userRepository.getUserById(id).then(result => {
      if (result != null) {
        return parsePojoIntoDto(result)
      } else {
        return undefined
      }
    }).catch(err => {
      console.error('An error occurred when retrieving the user.')
      console.error(err)
      return undefined
    })
    return userPromise
  }

  async addUser (user: NewUser): Promise<User> {
    const userPromise = await this.userRepository.addUser(user).then(result => {
      return parsePojoIntoDto(result)
    }).catch(err => {
      console.error('An error occurred when adding the user.')
      console.error(err)
      throw (err)
    })
    return userPromise
  }

  async login (email: string): Promise<User | undefined> {
    const userPromise = await this.userRepository.login(email).then(result => {
      if (result != null) {
        return parsePojoIntoDto(result)
      } else {
        return undefined
      }
    }).catch(err => {
      console.error('An error occurred when logging in.')
      console.error(err)
      return undefined
    })
    return userPromise
  }

  async updateUser (user: User): Promise<string> {
    var userPojo : DBUsers = user as DBUsers
    const userPromise = await this.userRepository.updateUser(userPojo)
    return userPromise
  }
}

export const parsePojoIntoDto = (user: DBUsers): User => {
  const returnUser = {
    userId: user.dataValues.userId,
    username: user.dataValues.username,
    password: user.dataValues.password,
    email: user.dataValues.email,
    fullname: user.dataValues.fullname,
    birthdate: user.dataValues.birthdate,
    deposit: user.dataValues.deposit,
  }
  return returnUser
}

/* export const parseDtoIntoPojo = (user: User): DBUsers => {
  const returnUser = {
    userId: user.userId,
    username: user.username,
    password: user.password,
    email: user.email,
    fullname: user.fullname,
    birthdate: user.birthdate,
    deposit: user.deposit,
  }
  return returnUser
} */