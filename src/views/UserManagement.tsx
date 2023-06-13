import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import DangerButton from '@/components/button/DangerButton'
import DefaultButton from '@/components/button/DefaultButton'
import SuccessButton from '@/components/button/SuccessButton'

export default function UserManagement() {
  const mock = [1, 1, 1, 1]

  return (
    <>
      <BaseLayout>
        <div className="pb-2">
          <h1 className="text-2xl font-bold text-gray-800">Manage User Accounts</h1>
        </div>

        <div className="grid grid-cols-12 gap-x-[20px]">
          <div className="col-span-5">
            <CardContent title="ACCOUNT INFORMATION">
              <form action="" className="mx-[10px] my-[20px]">
                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-6 mb-[15px]">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>

                  <div className="col-span-6 mb-[15px]">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-12 mb-[15px]">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Display name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-12">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-12 mb-[15px]">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="col-span-12 mb-[15px]">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Retype password
                    </label>
                    <input
                      type="password"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-x-[5px] items-center justify-end ">
                  <DefaultButton handleClick={() => {}} text="Cancel" />
                  <SuccessButton handleClick={() => {}} text="Save Account" />
                </div>
              </form>
            </CardContent>
          </div>

          <div className="col-span-7">
            {/* <CardContent> */}
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
                        <DangerButton text="Deactivate" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* </CardContent> */}
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
