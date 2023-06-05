import type { NavItems } from "../../../core/domain/types/NavItems.type"
import { useNavigate } from "react-router-dom"

export default function NavItem(props: NavItems) {
  const items = props.items
  const navigate = useNavigate()

  const redirect = (url: string) => {
    navigate(url)
  }

  return(
    <>
    {
      items.map((data: any, key) => 
        <a onClick={() => redirect(data.custom_route)} key={key}>
          {data.title}
        </a>
      ) 
    }
    </>
  )
}