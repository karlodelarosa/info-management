import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import DefaultButton from '@/components/button/DefaultButton'
import SuccessButton from '@/components/button/SuccessButton'
import PrimaryButton from '@/components/button/PrimaryButton'
import DangerButton from '@/components/button/DangerButton'

export default function AddAttendance() {
  const mock = [1, 1, 1, 1]

  return (
    <BaseLayout>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Add Attendance</h1>
      </div>

      <div className="grid grid-cols-12 gap-x-[20px]">
        <div className="col-span-4">
          <CardContent title="Add person">
            <form action="" className="mx-[10px] my-[20px]">
              <div className="grid grid-cols-1 gap-x-[15px] mb-[15px]">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Category
                  </label>
                  <select
                    name="first_name"
                    id="first_name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">All</option>
                    <option value="1">Member</option>
                    <option value="2">Worker</option>
                  </select>
                </div>
              </div>
            </form>

            <div className="flex flex-col rounded">
              {mock.map(() => (
                <div className="flex items-center p-2 justify-between hover:bg-gray-200">
                  <div>Karlo Dela Rosa</div>
                  <PrimaryButton text="Add" />
                </div>
              ))}
              {mock.map(() => (
                <div className="flex items-center p-2 justify-between hover:bg-gray-200">
                  <div>Karlo Dela Rosa</div>
                  <PrimaryButton text="Add" />
                </div>
              ))}
            </div>
          </CardContent>
        </div>

        <div className="col-span-8">
          <CardContent>
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
                      Contact Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mock.map((data: any, key) => (
                    <tr className="bg-white border-b hover:bg-gray-50 " key={key}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Karlo Dela Rosa
                      </th>
                      <td className="px-6 py-4">
                        Alegra Heights, San Vicente, Santa Maria, Bulacan
                      </td>
                      <td className="px-6 py-4">+63943443434</td>
                      <td className="px-6 py-4 text-right">
                        <DangerButton text="Remove" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-row gap-x-[5px] items-center justify-end ">
              <DefaultButton handleClick={() => {}} text="Draft" />
              <SuccessButton handleClick={() => {}} text="Save Attendance" />
            </div>
          </CardContent>
        </div>
      </div>
    </BaseLayout>
  )
}
