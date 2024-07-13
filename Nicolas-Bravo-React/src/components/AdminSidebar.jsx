import {Link} from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'

export default function AdminSidebar() {

    //  const { logout } = useAuth({middleware: 'auth'});

    return (
        <aside className="md:w-72 h-screen">
            <div className="flex flex-col items-center p-4 space-y-6">
                <img
                    src="../img/user.jpg" // Asegúrate de tener la ruta correcta de la imagen del usuario
                     alt="imagen del usuario"
                    className="w-24 h-24 rounded-full"
                />
                <p className="text-lg font-semibold">Nombre del Usuario</p>
                <p className="text-sm text-gray-600">Matrícula: 123456</p>
                <p className="text-sm text-gray-600">Contraseña: 123456</p>
            </div>

            <div className='my-5 px-5'>
                <button
                    type="button"
                    className="text-center bg-persian-blue-950 hover:bg-indigo-800 text-white w-full rounded-2xl mt-5 p-3 uppercase font-bold cursor-pointer"
                    // onClick={logout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    )
}
