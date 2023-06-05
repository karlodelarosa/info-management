import BaseLayout from '@/components/layout/BaseLayout'
import TopNav from '../components/nav/TopNav'

export default function Home() {
  return (
    <>
      <TopNav />
      <BaseLayout>
        <h1 className='text-2xl text-red-500'>test</h1>
      </BaseLayout>
    </>
  )
}
