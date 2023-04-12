import { connect } from '../config/user.db.config'
import { NewUser } from '../../types'
import { Users as DBUsers } from '../model/user.model'
import { v4 as uuid } from 'uuid'
import logger from '../../utils/log.utils'

export class UserRepository {
  private db: any
  private userRepository: any

  constructor () {
    this.db = connect()
    this.userRepository = this.db.sequelize.getRepository(DBUsers)
  }

  async getAllUsers (): Promise<DBUsers[]> {
    try {
      const Users = await this.userRepository.findAll()
      console.log('users:::', Users)

      return Users
    } catch (err) {
      logger.error('An error occurred when retrieving users.')
      logger.error(err)

      return []
    }
  }

  async getUserById (id: number): Promise<DBUsers> {
    let data: DBUsers = {} as DBUsers
    try {
      data = await this.userRepository.findByPk(id)
      console.log('users:::', data)
    } catch (err) {
      logger.error('An error occurred when retrieving the user.')
      logger.error(err)
    }
    return data
  }

  async addUser (user: NewUser): Promise<DBUsers> {
    let data = user as DBUsers
    try {
      data = await this.userRepository.findOne({ where: { email: user.email } })
      if (data == null) {
        user.userId = uuid()
        data = await this.userRepository.create(user)
      } else {
        logger.error('The user already exists.')
      }
    } catch (err) {
      logger.error('An error occurred when adding the user.')
      logger.error(err)
    }
    return data
  }

  async login (email: string): Promise<DBUsers> {
    let data: DBUsers = {} as DBUsers
    try {
      data = await this.userRepository.findOne({ where: { email } })
      if (data == null) {
        logger.error('The user does not exist.')
      } else {
        logger.warning('The user exists.')
      }
    } catch (err) {
      logger.error('An error occurred when retrieving the user.')
      logger.error(err)
    }
    return data
  }

  async updateUser (user: DBUsers): Promise<string> {
    let data = user as DBUsers
    try {
      data = await this.userRepository.findOne({ where: { email: user.email } })
      if (data != null) {
        this.userRepository.update(user, { where: { email: user.email } })
        return 'Updated'
      } else {
        return 'Not found'
      }
    } catch (err) {
      logger.error('An error occurred when updating the user.')
      logger.error(err)
      return 'Error'
    }
  }
}
