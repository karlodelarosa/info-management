import Sidebar from '@/components/sidebar/Sidebar'
import TopNav from '@/components/nav/TopNav'
import MainContent from '@/components/content/MainContent'

export default function BaseLayout({ children }: any) {
  return (
    <>
      <TopNav />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  )
}
