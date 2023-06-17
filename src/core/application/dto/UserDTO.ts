import { CreateUserForm } from '@/core/domain/types/CreateUserForm.types'
import { CreateUserRules } from '@/core/domain/rules/CreateUserRules'

export default class UserDTO {
  private readonly form: Readonly<CreateUserForm>

  constructor(formData: CreateUserForm) {
    this.validateCreateUserForm(formData)
    this.form = Object.freeze(formData)
  }

  private validateCreateUserForm(form: CreateUserForm): void {
    const missingFields = CreateUserRules.required.filter(
      (field) => !form[field as keyof CreateUserForm]
    )
    if (missingFields.length > 0) {
      const error = `${missingFields.join(', ')} ${
        missingFields.length > 1 ? 'are' : 'is'
      } required`
      throw new Error(error)
    }
  }

  private validateField(fieldName: keyof CreateUserForm): void {
    const fieldValue = this.form[fieldName]
    if (!fieldValue) {
      throw new Error(`${fieldName} field cannot be empty`)
    }
  }

  getFirstName(): string {
    this.validateField('first_name')
    return this.form.first_name
  }

  getLastName(): string {
    this.validateField('last_name')
    return this.form.last_name
  }

  getDisplayName(): string {
    this.validateField('display_name')
    return this.form.display_name
  }

  getEmail(): string {
    this.validateField('email')
    return this.form.email
  }
}
