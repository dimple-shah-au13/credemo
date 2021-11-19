import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { BaseModel, column ,  belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public userId: number;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public name: string

  @column()
  public gender: string

  @column()
  public mobile: number

  @column()
  public dateOfBirth: DateTime


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
}
