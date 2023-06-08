import type { ButtonType } from '@/core/domain/types/Button.types'

export default function DefaultButton(props: ButtonType) {
  const { text, handleClick } = props
  return (
    <button
      onClick={handleClick}
      className="bg-gray-200 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-300 transition-all duration-100 ease-in-out"
    >
      {text}
    </button>
  )
}
