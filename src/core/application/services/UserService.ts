import UserRepository from '@/core/infrastructure/repository/UserRepository'

export default class UserService {
  protected readonly userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  getAllUser() {
    return this.userRepository.findAll()
  }
}
