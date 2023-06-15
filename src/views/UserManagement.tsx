import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import DefaultButton from '@/components/button/DefaultButton'
import PrimaryButton from '@/components/button/PrimaryButton'
import SuccessButton from '@/components/button/SuccessButton'

import { useEffect, useState } from 'react'
import { db } from '@/core/infrastructure/db/DbClient'
import { PostgrestResponse } from '@supabase/supabase-js'

interface User {
  first_name: string
  last_name: string
  user_role: {
    name: string
  }
}

export default function UserManagement() {
  const [fetchUsers, setUsers] = useState<User[]>([])

  async function getUsers() {
    const { data }: PostgrestResponse<User> = await db
      .from('user')
      .select(`first_name, last_name, user_role (name)`)
    setUsers(data || [])
    // console.info(data)
    // return data
  }

  useEffect(() => {
    getUsers()
  }, [])

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
                      Role
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      Contact Number
                    </th> */}
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fetchUsers.map((data: User, key) => (
                    <tr className="bg-white border-b hover:bg-gray-50 " key={key}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {data.first_name} {data.last_name}
                      </th>
                      <td className="px-6 py-4">{data.user_role.name}</td>
                      <td className="px-6 py-4 text-right">
                        <PrimaryButton handleClick={() => {}} text="Manage Settings" />
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
