export default function MainContent({ children }: any) {
  return (
    <main className="p-4 sm:ml-64 pt-[70px] bg-gray-50 min-h-screen">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        {children}
      </div>
    </main>
  )
}
