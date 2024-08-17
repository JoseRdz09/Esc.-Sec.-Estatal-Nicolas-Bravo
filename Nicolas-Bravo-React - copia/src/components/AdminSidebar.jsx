import React from 'react';
import { useAuth } from '../hooks/useAuth'

export default function AdminSidebar() {
    const { user, logout } = useAuth({ middleware: 'auth' });

    if (!user) return <div>Cargando...</div>; // Puedes manejar el estado de carga si es necesario

    return (
        <aside className="md:w-72 h-screen">
            <div className="flex flex-col items-center p-4 space-y-6">
                <img
                    src="../img/user.jpg"
                    alt="imagen del usuario"
                    className="w-24 h-24 rounded-full"
                />
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-600">Matricula: 2200314533</p>
                <p className="text-sm text-gray-600">Contraseña: ****</p>
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-persian-blue-950 hover:bg-indigo-800 text-white w-full rounded-2xl mt-5 p-3 uppercase font-bold cursor-pointer"
                    onClick={logout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
}
