import { useNavigate } from 'react-router-dom'
import BaseLayout from '@/components/layout/BaseLayout'
import SuccessButton from '@/components/button/SuccessButton'

export default function Profiles() {
  const mock = [1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1]
  const navigate = useNavigate()

  const redirect = () => {
    navigate('/profile/add')
  }

  return (
    <>
      <BaseLayout>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-x-[10px]">
            <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2">
              <option value="">All</option>
              <option value="">Members</option>
              <option value="">Workers</option>
            </select>
            <input
              type="text"
              placeholder="Search Name"
              className="className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2"
            />
          </div>
          <SuccessButton handleClick={() => redirect()} text="Add Profile" />
        </div>

        <div className="mt-[10px]">
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
                {mock.map((data: any, key) => (
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
                    <td className="px-6 py-4">Alegra Heights, San Vicente, Santa Maria, Bulacan</td>
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

          <div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-700 ">
                Showing <span className="font-semibold text-gray-900 ">1</span> to{' '}
                <span className="font-semibold text-gray-900 ">10</span> of{' '}
                <span className="font-semibold text-gray-900 ">100</span> Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900">
                  Prev
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
