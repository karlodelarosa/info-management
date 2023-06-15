import { PostgrestResponse } from '@supabase/supabase-js'
import { User } from '@/core/domain/models/User.types'
import DbConnection from '../db/DbConnection'
import { IUserRepository } from '@/core/domain/repositories/IUserRepository'

export default class UserRepository extends DbConnection implements IUserRepository {
  findById(id: string): Promise<User | null> {
    const user = ''
    console.info(id)
    return Promise.resolve(user || null)
  }

  async findAll(): Promise<User[]> {
    try {
      const { data, error }: PostgrestResponse<User> = await this.db()
        .from('user')
        .select(`first_name, middle_name, last_name, user_role (name)`)

      if (error) {
        throw new Error(error.message)
      }

      return data || []
    } catch (err) {
      console.error('UserRepository.fetchAll', err)
      throw err
    }
  }

  save(user: User): Promise<void> {
    console.info(user)
    // this.users.push(user)
    return Promise.resolve()
  }

  delete(id: string): Promise<void> {
    console.info(id)
    return Promise.resolve()
  }
}
