import { Routes, Route } from 'react-router-dom'
import Attendance from '@/views/Attendance'
import Home from '../views/Home'
import Members from '@/views/Members'
import Settings from '../views/Settings'
import SignIn from '../views/SignIn'
import Profile from '@/views/Profile'
import AddProfile from '@/views/AddProfile'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/attendance" element={<Attendance />}></Route>
      <Route path="/members" element={<Members />}></Route>
      <Route path="/profile/add" element={<AddProfile />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  )
}
