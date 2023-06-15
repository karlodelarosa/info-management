import { db } from './DbClient'

export default class DbConnection {
  protected readonly dbConnection

  constructor() {
    if (!db) {
      throw new Error('Db variable is not defined')
    }
    this.dbConnection = db
  }

  protected db() {
    return this.dbConnection
  }
}
