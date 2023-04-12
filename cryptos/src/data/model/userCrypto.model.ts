import { STRING, DECIMAL } from 'sequelize'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
    freezeTableName: true,
    tableName: 'user_crypto',
    timestamps: false,
})

export class UserCryptos extends Model {
    @Column({
        type: STRING,
        primaryKey: true,
        field: 'user_id',
    })
    userId!: string

    @Column({
        type: STRING,
        primaryKey: true,
        field: 'crypto_id',
    })
    cryptoId!: string

    @Column({
        type: DECIMAL,
    })
    amount!: number
}