import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Tamanho extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @hasMany(() => Produto)
  public produto: HasMany<typeof Produto>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
