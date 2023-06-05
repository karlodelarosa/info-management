import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Settings from '../views/Settings'
import SignIn from '../views/SignIn'

export default function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/settings' element={<Settings/>}></Route>
    </Routes>
  )
}