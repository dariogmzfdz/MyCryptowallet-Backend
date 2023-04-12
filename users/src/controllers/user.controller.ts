import { UserService } from '../services/user.service'
import { parseInputUser, parseInputLogin } from '../utils/users.utils'
import logger from '../utils/log.utils'

import jwt from 'jsonwebtoken'

const userService: UserService = new UserService()

export const userController = {
  getUsers: (_req: any, res: any) => {
    void userService.getUsers().then(result => {
      res.json(result)
    }).catch(err => {
      logger.error(err)
      res.sendStatus(500)
    })
  },
  getUserById: (req: any, res: any) => {
    userService.getUserById(+req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  addUser: (req: any, res: any) => {
    try {
      const inputUser = parseInputUser(req.body)
      userService.addUser(inputUser).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  login: (req: any, res: any) => {
    try {
      const inputUser = parseInputLogin(req.body)
      userService.login(inputUser.email).then(result => {
        if (result != null && result.password === inputUser.password) {
          const token = jwt.sign({ userId: result.userId, username: result.username, email: result.email, deposit: result.deposit }, process.env.JWT_SECRET)
          res.json({ token })
        } else {
          res.sendStatus(404)
        }
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  updateUser: (req: any, res: any) => {
    try {
      const inputUser = parseInputUser(req.body)
      console.log('inputUser:::', inputUser);
      
      userService.updateUser(inputUser).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  }
}
