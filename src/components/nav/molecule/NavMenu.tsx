import NavItem from '../atom/NavItem'
import { NAV_MENU } from '../../../js/BaseConstant'

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <NavItem items={NAV_MENU} />
    </nav>
  )
}
