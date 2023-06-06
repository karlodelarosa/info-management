import SidebarItem from '@/components/sidebar/atom/SidebarItem'
import { SIDEBAR_MENU } from '@/js/BaseConstant'

export default function SidebarMenu() {
  return (
    <ul className="space-y-2 font-medium">
      <SidebarItem items={SIDEBAR_MENU} />
    </ul>
  )
}
