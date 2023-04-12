import { STRING, DECIMAL } from 'sequelize'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  freezeTableName: true,
  tableName: 'users',
  timestamps: false
})
export class Users extends Model {
  @Column({
    type: STRING,
    primaryKey: true,
    field: 'user_id'
  })
    userId!: string

  @Column({
    type: STRING
  })
    username!: string
    
  @Column({
    type: STRING
  })
  password!: string
  
  @Column({
    type: STRING
  })
    email!: string

  @Column({
    type: STRING
  })
    fullname!: string

  @Column({
    type: STRING
  })
    birthdate!: string

  @Column({
    type: DECIMAL
  })
    deposit!: number
}
