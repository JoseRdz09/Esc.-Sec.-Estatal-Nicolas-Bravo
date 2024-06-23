import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Authlayout from './layouts/Authlayout'
import Login from './views/Login'
import Home from './views/Home'
import Adminlayout from './layouts/Adminlayout'



const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '/auth',
        element: <Authlayout />,
        children: [
            { 
                path: '/auth/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/admin',
        element: <Adminlayout />
    }
   
])

export default router