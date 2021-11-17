import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('users_id').unsigned().references('users.id')
      table.string('name', 180).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('gender', 180).notNullable()
      table.string('mobile', 10).notNullable()
      table.string('dob').notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
