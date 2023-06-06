import type { NavItems } from '@/core/domain/types/NavItems.type'
import { useNavigate } from 'react-router-dom'

export default function SidebarItem(props: NavItems) {
  const items = props.items
  const navigate = useNavigate()

  const redirect = (url: string) => {
    navigate(url)
  }

  return (
    <>
      {items.map((data: any, key) => (
        <li key={key}>
          <a
            onClick={() => redirect(data.custom_route)}
            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <span className="ml-3">{data.title}</span>
          </a>
        </li>
      ))}
    </>
  )
}
