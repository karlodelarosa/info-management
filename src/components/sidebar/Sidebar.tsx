import SidebarMenu from './molecules/SidebarMenu'

export default function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 pt-[60px] z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
        <SidebarMenu />
      </div>
    </aside>
  )
}
