import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'

export default function Family() {
  return (
    <BaseLayout>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Manage Family</h1>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <CardContent>
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Families
              </label>
              <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                {' '}
                <option value="">Show families</option>
                <option value="1">Family 1</option>
                <option value="1">Family 2</option>
              </select>
            </div>
          </CardContent>
        </div>
      </div>
    </BaseLayout>
  )
}
