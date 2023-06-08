import BaseLayout from '@/components/layout/BaseLayout'

export default function Home() {
  return (
    <>
      <BaseLayout>
        <div className="flex items-center">
          <h1 className="text-3xl  text-gray-800">
            Welcome to <br />
            <span className="text-7xl font-bold">RECORDS UI</span>
          </h1>
        </div>
      </BaseLayout>
    </>
  )
}
