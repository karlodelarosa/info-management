import type { ButtonType } from "@/core/domain/types/Button.types"

export default function SuccessButton(props: ButtonType) {
  const { text, handleClick } = props
  return (
    <button
      onClick={handleClick}
      className="bg-green-500 rounded-lg px-3 py-2 text-white hover:brightness-95 transition-all duration-100 ease-in-out"
    >
      {text}
    </button>
  )
}
