import { CreateUserForm } from "@/core/domain/types/CreateUserForm.types"

export default class UserDTO {
  private readonly form: Readonly<CreateUserForm>

  constructor(formData: CreateUserForm) {
    this.form = Object.freeze(formData)
  }

  getFirstName(): string {
    return this.form.first_name
  }

  getLastName(): string {
    return this.form.last_name
  }

  getDisplayName(): string {
    return this.form.display_name
  }

  getEmail(): string {
    return this.form.email
  }

  getAll(): CreateUserForm {
    return this.form
  }
}
