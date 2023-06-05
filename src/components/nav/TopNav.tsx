import NavMenu from '@/components/nav/molecule/NavMenu'
import Brand from '@/components/nav/atom/Brand'
import '@/assets/styles/module/navigation.css'

export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full text-gray-700 bg-white dark-mode:text-gray-200 border-b border-gray-300">
      <div className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Brand />
        </div>
        <NavMenu />
      </div>
    </div>
  )
}
