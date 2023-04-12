import { DECIMAL, STRING } from 'sequelize'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  freezeTableName: true,
  tableName: 'cryptos',
  timestamps: false,
})
export class Cryptos extends Model {
  @Column({
    type: STRING,
    primaryKey: true,
    field: 'crypto_id',
  })
  cryptoId!: string

  @Column({
    type: STRING,
  })
  name!: string

  @Column({
    type: DECIMAL,
  })
  value!: number

  @Column({
    type: STRING,
  })
  icon!: string

  @Column({
    type: STRING,
  })
  asset!: string

  @Column({
    type: DECIMAL,
  })
  stock!: number
}
