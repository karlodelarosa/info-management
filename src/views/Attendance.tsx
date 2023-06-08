import { useNavigate } from 'react-router-dom'
import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import SuccessButton from '@/components/button/SuccessButton'

export default function Attendance() {
  const navigate = useNavigate()
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <>
      <BaseLayout>
        <div className="pb-2">
          <h1 className="text-2xl font-bold text-gray-800">Attendance Management</h1>
        </div>

        <div className="grid grid-cols-12 gap-x-[15px]">
          <div className="col-span-3">
            <CardContent title="Listed Schedules">
              <ul className="mt-2">
                {arr.map((data: any, key) => (
                  <li
                    key={key}
                    className={`transition-all duration-100 cursor-pointer hover:bg-gray-200 rounded py-2 px-2 ${
                      key == 4 ? 'bg-gray-200' : ''
                    }`}
                  >
                    May 29, 2023
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
          <div className="col-span-9">
            <div className="flex flex-row items-center justify-between mb-[15px]">
              <div>
                <h2 className="text-2xl font-bold">May 29, 2023</h2>
                <p className="text-gray-500">Total count: 45</p>
              </div>
              <SuccessButton
                handleClick={() => navigate('/attendance/add')}
                text="Create attendance list"
              />
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-[30px]">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Checkbox</span>
                    </th>
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
                  {arr.map((data: any, key) => (
                    <tr className="bg-white border-b hover:bg-gray-50 " key={key}>
                      <td className="px-6 py-4">
                        <input type="checkbox" name="" id="" />
                      </td>
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
                        <a href="#" className="font-medium text-blue-600 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
