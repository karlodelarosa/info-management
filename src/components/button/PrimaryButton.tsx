export default function PrimaryButton(props: any) {
  return (
    <button className="bg-gray-800 rounded-lg px-3 py-2 text-white hover:bg-gray-900 transition-all duration-100 ease-in-out">
      {props.text}
    </button>
  )
}
