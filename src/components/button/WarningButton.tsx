export default function WarningButton(props: any) {
  return (
    <button className="bg-orange-400 rounded-lg px-3 py-2 text-white hover:bg-orange-500 transition-all duration-100 ease-in-out">
      {props.text}
    </button>
  )
}
