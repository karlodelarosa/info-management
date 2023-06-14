import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import PrimaryButton from '@/components/button/PrimaryButton'
import SuccessButton from '@/components/button/SuccessButton'

export default function Family() {
  const mock = [1, 1, 1, 1]

  return (
    <BaseLayout>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Manage Family</h1>
      </div>

      <div className="grid grid-cols-12 gap-x-[20px]">
        <div className="col-span-4">
          <CardContent title="Manage Family Member">
            <div className="px-[10px] py-[15px]">
              <div className="mb-[15px]">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Search Profile
                </label>
                <input
                  type="text"
                  placeholder="Search Profile"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              <div className="flex flex-col rounded">
                {mock.map(() => (
                  <div className="flex items-center p-2 justify-between hover:bg-gray-200">
                    <div>Karlo Dela Rosa</div>
                    <PrimaryButton text="Add" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </div>

        <div className="col-span-8">
          <CardContent>
            <div className="w-1/2">
              <div className="mb-[15px]">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Family Names
                </label>
                <select className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                  {' '}
                  <option value="">Select Family</option>
                  <option value="1">Family 1</option>
                  <option value="1">Family 2</option>
                </select>
              </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-[30px]">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Relation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mock.map((data: any) => (
                    <tr className="bg-white border-b hover:bg-gray-50 " key={data}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Karlo Dela Rosa
                      </th>
                      <td className="px-6 py-4">
                        Alegra Heights, San Vicente, Santa Maria, Bulacan
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <select className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                            {' '}
                            <option value="">Father</option>
                            <option value="1">Mother</option>
                            <option value="1">Son</option>
                            <option value="1">Daughter</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-row gap-x-[5px] items-center justify-end ">
              <SuccessButton handleClick={() => {}} text="Save Family Designation" />
            </div>
          </CardContent>
        </div>
      </div>
    </BaseLayout>
  )
}
