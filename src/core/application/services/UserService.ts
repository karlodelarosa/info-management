import { CreateUserForm } from '@/core/domain/types/CreateUserForm.types'

import UserDTO from '../dto/UserDTO'
import UserRepository from '@/core/infrastructure/repository/UserRepository'

export default class UserService {
  protected readonly userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  getAllUser() {
    return this.userRepository.findAll()
  }

  registerUser(form: CreateUserForm) {
    const userDto = new UserDTO(form)

    return this.userRepository.save(userDto.getAll())
  }
}
