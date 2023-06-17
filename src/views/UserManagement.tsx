import { useEffect, useState, FormEvent } from 'react'
import { CreateUserForm } from '@/core/domain/types/CreateUserForm.types'
import { User } from '@/core/domain/models/User.types'
import UserService from '@/core/application/services/UserService'
/*
 * Components
 */
import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import DefaultButton from '@/components/button/DefaultButton'
import DefaultTable from '@/components/table/DefaultTable'
import FormGroup from '@/components/form/FormGroup'
import PageHeading from '@/components/text/PageHeading'
import PrimaryButton from '@/components/button/PrimaryButton'
import SuccessButton from '@/components/button/SuccessButton'

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [formData, setFormData] = useState<CreateUserForm>({
    first_name: '',
    last_name: '',
    display_name: '',
    email: ''
  })

  const userService = new UserService()

  const handleInputChange = (name: keyof CreateUserForm, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    userService.registerUser(formData)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await userService.getAllUser()
      setUsers(fetchedUsers || [])
    }

    fetchUsers()
  }, [])

  return (
    <>
      <BaseLayout>
        <PageHeading text="Manage User Accounts" />

        <div className="grid grid-cols-12 gap-x-[20px]">
          <div className="col-span-5">
            <CardContent title="ACCOUNT INFORMATION">
              <form onSubmit={handleSubmit} className="mx-[10px] my-[20px]">
                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-6">
                    <FormGroup
                      id="first_name"
                      label="First Name"
                      inputType="text"
                      name="first_name"
                      value={formData.first_name}
                      required={true}
                      onValueChange={handleInputChange}
                    />
                  </div>

                  <div className="col-span-6">
                    <FormGroup
                      id="last_name"
                      label="Last Name"
                      inputType="text"
                      name="last_name"
                      value={formData.last_name}
                      required={true}
                      onValueChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-12">
                    <FormGroup
                      id="display_name"
                      label="Display Name"
                      inputType="text"
                      name="display_name"
                      value={formData.display_name}
                      required={false}
                      onValueChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[15px] mb-[30px]">
                  <div className="col-span-12">
                    <FormGroup
                      id="email"
                      label="Email"
                      inputType="email"
                      name="email"
                      value={formData.email}
                      required={true}
                      onValueChange={handleInputChange}
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
            <DefaultTable columns={['name', 'role']}>
              {users.map((data: User, key: any) => (
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
            </DefaultTable>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
