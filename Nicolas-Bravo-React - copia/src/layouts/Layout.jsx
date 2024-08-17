import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div>
        <Navbar />

        <div className='pt-24 w-full'>
            <Outlet />
        </div>

    </div>
  )
}
