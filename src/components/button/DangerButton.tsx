export default function DangerButton(props: any) {
  return (
    <button className="bg-red-500 rounded-lg px-3 py-2 text-white hover:brightness-95 transition-all duration-100 ease-in-out">
      {props.text}
    </button>
  )
}
