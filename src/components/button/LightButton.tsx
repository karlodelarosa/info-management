export default function LightButton(props: any) {
  return (
    <button className="bg-white rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-200 transition-all duration-100 ease-in-out">
      {props.text}
    </button>
  )
}
