import { ReactNode } from 'react'

interface ComponentSlot {
  columns: string[]
  children: ReactNode
}

export default function DefaultTable({ columns, children }: ComponentSlot) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-[30px]">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-400">
          <tr>
            {columns.map((columnName: string, key: any) => (
              <th scope="col" className="px-6 py-3" key={key}>
                {columnName}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
