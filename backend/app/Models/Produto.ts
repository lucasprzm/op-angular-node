import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Tamanho from './Tamanho'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public quantidade: number

  @column()
  public preco: number

  @column()
  public descricao: string

  @column()
  public categoria_id: number

  @column()
  public tamanho_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Categoria)
  public categoria: BelongsTo<typeof Categoria>

  @belongsTo(() => Tamanho)
  public tamanho: BelongsTo<typeof Tamanho>
}
