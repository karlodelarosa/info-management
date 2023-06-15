import { FormData } from '@/core/domain/types/FormData.types'

interface FormGroup {
  id: string
  label: string
  inputType: string
  name: keyof FormData
  value: string
  required?: boolean
  disabled?: boolean
  onValueChange: (name: keyof FormData, value: string) => void
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
        {label}
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
