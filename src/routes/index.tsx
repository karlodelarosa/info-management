import { Routes, Route } from 'react-router-dom'
import Attendance from '@/views/Attendance'
import Home from '../views/Home'
import Members from '@/views/Members'
import Settings from '../views/Settings'
import SignIn from '../views/SignIn'
import Profile from '@/views/Profile'
import AddProfile from '@/views/AddProfile'
import AddAttendance from '@/views/AddAttendance'
import Schedule from '@/views/Schedule'
import Family from '@/views/Family'
import EditProfile from '@/views/EditProfile'
import Ministry from '@/views/Ministry'
import UserManagement from '@/views/UserManagement'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/attendance" element={<Attendance />}></Route>
      <Route path="/attendance/add" element={<AddAttendance />}></Route>
      <Route path="/members" element={<Members />}></Route>
      <Route path="/profile/add" element={<AddProfile />}></Route>
      <Route path="/profile/edit" element={<EditProfile />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/schedule" element={<Schedule />}></Route>
      <Route path="/family" element={<Family />}></Route>
      <Route path="/ministry" element={<Ministry />}></Route>
      <Route path="/user-management" element={<UserManagement />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  )
}
