import { Sequelize } from 'sequelize-typescript'
import { Users } from '../model/user.model'

export const connect = () => {
  const hostName = !(process.env.DB_HOST == null) ? process.env.DB_HOST : 'localhost'
  const port = !(process.env.DB_PORT == null) ? process.env.DB_PORT : 5432
  const username = 'postgres'
  const password = 'postgres'
  const database = !(process.env.DB_NAME == null) ? process.env.DB_NAME : 'cryptowallet-db'
  const schema = 'cryptowallet-schema'
  const dialect: any = 'postgres'
  const sequelize = new Sequelize(database, username, password, {
    host: hostName,
    port: +port,
    dialect,
    repositoryMode: true,
    schema,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000
    }
  })
  console.log('===============================')
  console.log('Database environment variables:')
  console.log(`Hostname: ${hostName}`)
  console.log(`Port: ${port}`)
  console.log(`Database: ${database}`)
  console.log('===============================')
  
  sequelize.addModels([Users])

  const db: any = {}
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  return db
}
