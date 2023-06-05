import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()

  const goToDashboard = () => {
    navigate('/')
  }

  return(
    <div className="w-full h-screen bg-blue-900 flex items-center justify-center">
      <div className="w-[500px] bg-white rounded-2xl p-[25px]">
        <h1 className="text-2xl text-center mb-[30px]">Sign In</h1>
        <form className="flex flex-col gap-[10px]">
          <div>
            <label htmlFor="username" className="uppercase text-sm font-bold">Username or Email:</label>
            <input type="text" id="username" className="w-full rounded px-2 py-2 border border-gray-300 focus:outline outline-blue-700"/>
          </div>
          <div>
            <label htmlFor="password" className="uppercase text-sm font-bold">Password:</label>
            <input type="password" id="password" className="w-full rounded px-2 py-2 border border-gray-300 focus:outline outline-blue-700" />
          </div>

          <div className="mt-[20px]">
            <button onClick={goToDashboard} className="w-full bg-blue-900 text-white rounded py-3">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}