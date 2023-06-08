import BaseLayout from '@/components/layout/BaseLayout'
import CardContent from '@/components/cards/CardContent'
import LightButton from '@/components/button/LightButton'
import SuccessButton from '@/components/button/SuccessButton'
import WarningButton from '@/components/button/WarningButton'

export default function Schedule() {
  const mock = [1, 1, 1, 1, 1, 1, 1]
  return (
    <BaseLayout>
      <div className="pb-2">
        <h1 className="text-2xl font-bold text-gray-800">Schedule Management</h1>
      </div>

      <div className="grid grid-cols-12 gap-[15px]">
        <div className="col-span-4">
          <CardContent>
            <div className="mb-[15px]">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Schedule name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Sunday funday"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-[15px]">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Date
              </label>
              <input
                type="date"
                id="first_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="flex justify-end">
              <SuccessButton handleClick={() => {}} text="Save schedule" />
            </div>
          </CardContent>
        </div>

        <div className="col-span-8">
          {/* <CardContent> */}
          <ol className="relative border-l border-gray-300 ">
            {mock.map(() => {
              return (
                <li className="mb-10 ml-4 bg-white py-2 px-4 rounded-lg">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                    June 28 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 ">13th Anniversary</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 ">Regular service</p>

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-x-1">
                      <WarningButton handleClick={() => {}} text="Edit" />
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-200 rounded-lg hover:bg-gray-900 transition-all duration-100"
                      >
                        Manage Attendance{' '}
                        <svg
                          className="w-3 h-3 ml-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>

                    <div>
                      <LightButton handleClick={() => {}} text="Delete" />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          {/* </CardContent> */}
        </div>
      </div>
    </BaseLayout>
  )
}
