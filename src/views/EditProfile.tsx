import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import DefaultButton from '@/components/button/DefaultButton'
import SuccessButton from '@/components/button/SuccessButton'

export default function EditProfile() {
  return (
    <BaseLayout>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
      </div>

      <div className="grid grid-cols-12 gap-[15px]">
        <div className="col-span-7 flex flex-col gap-[15px]">
          <CardContent title="More Information">
            <div className="mx-[10px] my-[20px]">
              <div className="relative w-[100px] h-[100px] overflow-hidden bg-gray-100 rounded-full mx-auto border-4 border-black">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title></title>{' '}
                    <g id="Complete">
                      {' '}
                      <g id="user">
                        {' '}
                        <g>
                          {' '}
                          <path
                            d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                            fill="none"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>{' '}
                          <circle
                            cx="12"
                            cy="7"
                            fill="none"
                            r="4"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></circle>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
            </div>

            <div className="relative">
              <input type="file" className="hidden" id="file-input" />
              <label
                htmlFor="file-input"
                className="cursor-pointer flex items-center justify-center w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add profile picture
              </label>
            </div>

            <div className="mx-[10px] my-[20px]">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Family name
              </label>
              <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Select</option>
                <option value="1">Family 1</option>
              </select>
            </div>

            <div className="flex flex-row gap-x-[5px] items-center justify-end ">
              <DefaultButton handleClick={() => {}} text="Cancel" />
              <SuccessButton handleClick={() => {}} text="Save profile" />
            </div>
          </CardContent>

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

              <div className="flex flex-row gap-x-[5px] items-center justify-end ">
                <DefaultButton handleClick={() => {}} text="Cancel" />
                <SuccessButton handleClick={() => {}} text="Save profile" />
              </div>
            </form>
          </CardContent>
        </div>
        <div className="col-span-5">
          {/* <CardContent title="More Information">
            <div className="mx-[10px] my-[20px]">
              <div className="relative w-[100px] h-[100px] overflow-hidden bg-gray-100 rounded-full mx-auto border-4 border-black">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title></title>{' '}
                    <g id="Complete">
                      {' '}
                      <g id="user">
                        {' '}
                        <g>
                          {' '}
                          <path
                            d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                            fill="none"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>{' '}
                          <circle
                            cx="12"
                            cy="7"
                            fill="none"
                            r="4"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></circle>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
            </div>

            <div className="relative">
              <input type="file" className="hidden" id="file-input" />
              <label
                htmlFor="file-input"
                className="cursor-pointer flex items-center justify-center w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add profile picture
              </label>
            </div>

            <div className="mx-[10px] my-[20px]">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Family name
              </label>
              <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Select</option>
                <option value="1">Family 1</option>
              </select>
            </div>
          </CardContent> */}
        </div>
      </div>
    </BaseLayout>
  )
}
