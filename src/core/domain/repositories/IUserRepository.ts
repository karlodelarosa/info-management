import { CreateUserForm } from '../types/CreateUserForm.types'
import { User } from '../models/User.types'

export interface IUserRepository {
  findById(id: string): Promise<User | null>
  findAll(): Promise<User[]>
  save(user: CreateUserForm): Promise<void>
  delete(id: string): Promise<void>
}
