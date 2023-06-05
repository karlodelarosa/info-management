import { useNavigate } from "react-router-dom"

const redirection = (route: string) => {
  const navigate = useNavigate()
  navigate(route)
}

export default redirection