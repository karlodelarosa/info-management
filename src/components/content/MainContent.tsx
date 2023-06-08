import Breadcrumb from "../nav/molecule/Breadcrumb"
import { ComponentSlot } from "@/core/domain/types/ComponentSlot.type"

export default function MainContent({ children }: ComponentSlot) {
  return (
    <>
      <main className="sm:ml-64 pt-[85px] px-[25px] bg-gray-100 min-h-screen">
        <Breadcrumb />
        {children}
      </main>
    </>
  )
}
