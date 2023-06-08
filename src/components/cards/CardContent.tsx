import { ComponentSlot } from '@/core/domain/types/ComponentSlot.type';

interface PropsAndChildren extends ComponentSlot {
  title?: string
}

export default function CardContent({ title, children }: PropsAndChildren) {
  return(
    <>
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="pb-2 font-bold text-gray-700 uppercase border-b border-gray-200">{title && <p>{title}</p>}</h2>
        {children}
      </div>
    </>
  )
}