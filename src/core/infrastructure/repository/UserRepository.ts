import { PostgrestResponse } from '@supabase/supabase-js'
import { User } from '@/core/domain/models/User.types'
import DbConnection from '../db/DbConnection'
import { IUserRepository } from '@/core/domain/repositories/IUserRepository'
import { CreateUserForm } from '@/core/domain/types/CreateUserForm.types'
import UserEntity from '@/core/domain/entity/User'
import { Response } from '@/core/domain/types/Response.type'

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

  async save(user: CreateUserForm): Promise<any> {
    try {
      const userForm = { ...user, user_type: UserEntity.ROLE_MEMBER }

      const { data, error } = await this.db().from('user').insert(userForm).select()

      if (error) {
        throw new Error(error.message)
      }

      return Promise.resolve({
        success: true,
        message: 'User saved successfully',
        data: data
      })
    } catch (err) {
      console.error('UserRepository.save', err)
      throw err
    }
  }

  delete(id: string): Promise<void> {
    console.info(id)
    return Promise.resolve()
  }
}
