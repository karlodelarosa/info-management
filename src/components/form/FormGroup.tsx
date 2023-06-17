import { CreateUserForm } from '@/core/domain/types/CreateUserForm.types'

interface FormGroup {
  id: string
  label: string
  inputType: string
  name: keyof CreateUserForm
  value: string
  required?: boolean
  disabled?: boolean
  onValueChange: (name: keyof CreateUserForm, value: string) => void
}

export default function FormGroup({
  id,
  label,
  inputType,
  name,
  value,
  required = false,
  disabled = false,
  onValueChange
}: FormGroup) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    onValueChange(name, inputValue)
  }

  return (
    <>
      <label htmlFor={id} className="form-label">
        {label} {required ? '*' : ''}
      </label>
      <input
        type={inputType}
        id={id}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        className="form-input"
      />
    </>
  )
}
