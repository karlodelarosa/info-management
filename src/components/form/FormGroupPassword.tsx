import { useState } from 'react'
import { CreateUserForm } from '@/core/domain/types/CreateUserForm.types'
import EyeClosed from '@/components/icons/EyeClosed'
import EyeOpened from '@/components/icons/EyeOpened'

interface FormGroup {
  id: string
  label: string
  name: keyof CreateUserForm
  value: string
  required?: boolean
  disabled?: boolean
  onValueChange: (name: keyof CreateUserForm, value: string) => void
}

export default function FormGroupPassword({
  id,
  label,
  name,
  value,
  required = false,
  disabled = false,
  onValueChange
}: FormGroup) {
  const [isVisiblePassword, setPasswordVisibility] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    onValueChange(name, inputValue)
  }

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState)
  }

  return (
    <>
      <label htmlFor={id} className="form-label">
        {label} {required ? '*' : ''}
      </label>
      <div className="relative">
        <input
          type={isVisiblePassword ? 'text' : 'password'}
          id={id}
          required={required}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          className="form-input"
        />

        <button type="button" onClick={togglePasswordVisibility}>
          {isVisiblePassword ? <EyeClosed /> : <EyeOpened />}
        </button>
      </div>
    </>
  )
}
