import {Outlet} from 'react-router-dom'
import AdminSidebar from "../components/AdminSidebar";
import Home from '../views/Home';

export default function Adminlayout() {
  return (
    <div className='md:flex'>
      <AdminSidebar />

      <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Home />
      </main>
    </div>
  )
}
