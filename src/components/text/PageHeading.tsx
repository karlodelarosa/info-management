export default function PageHeading({ text }: { text: string }) {
  return (
    <div className="pb-2">
      <h1 className="text-2xl font-bold text-gray-800">{text}</h1>
    </div>
  )
}
