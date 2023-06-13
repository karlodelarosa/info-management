import PrimaryButton from '@/components/button/PrimaryButton'

import BaseLayout from '@/components/layout/BaseLayout'
export default function Ministry() {
  return (
    <BaseLayout>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Ministry Management</h1>
      </div>

      <div className="text-right">
        <PrimaryButton text="Add Ministry" />
      </div>
    </BaseLayout>
  )
}
