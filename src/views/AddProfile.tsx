import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import DefaultButton from '@/components/button/DefaultButton'
import SuccessButton from '@/components/button/SuccessButton'

export default function AddProfile() {
  return (
    <>
      <BaseLayout>
        <div className="py-2">
          <h1 className="text-2xl font-bold text-gray-800">Add New Profile</h1>
        </div>

        <div className="grid grid-cols-12 gap-x-[20px]">
          <div className="col-span-7">
            <CardContent title="PERSONAL INFORMATION">
              
              <form action="" className="mx-[10px] my-[20px]">
                <div className="grid grid-cols-12 gap-x-[15px] mb-[15px]">
                  <div className="col-span-4">
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
                  <div className="col-span-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Middle name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="col-span-4">
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
                  <div className="col-span-6">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="first_name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-[15px] mb-[30px]">
                  <div className="col-span-12">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Address
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write your full address ..."
                    ></textarea>
                  </div>
                </div>

                <div className='flex flex-row gap-x-[5px] items-center justify-end '>
                  <DefaultButton handleClick={() => {}} text='Cancel'/>
                  <SuccessButton handleClick={() => {}} text='Save profile'/>
                </div>
              </form>
            </CardContent>
          </div>

          <div className='col-span-5'>
          
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
