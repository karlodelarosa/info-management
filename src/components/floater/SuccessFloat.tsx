import { Response } from '@/core/domain/types/Response.type'

interface SuccessResponse {
  response: Response
}

export default function SuccessFloat({ response }: SuccessResponse) {
  let showAlert = 'opacity-100'
  setTimeout(() => {
    showAlert = 'opacity-0'
  }, 2000)

  return (
    <div
      className={`fixed top-20 right-5 z-50 flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 ${showAlert}`}
      role="alert"
    >
      <svg
        className="w-5 h-5 text-green-800 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21 21"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div>test</div>
    </div>
  )
}
