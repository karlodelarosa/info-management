export default function DefaultButton(props: any) {
  return (
    <button className="bg-gray-200 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-300 transition-all duration-100 ease-in-out">
      {props.text}
    </button>
  )
}
