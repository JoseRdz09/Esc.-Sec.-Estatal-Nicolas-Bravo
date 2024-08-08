import React from 'react';
import Logout from './Logout'; // Asegúrate de ajustar la ruta según tu estructura de archivos

export default function AdminSidebar() {
    return (
        <aside className="md:w-72 h-screen">
            <div className="flex flex-col items-center p-4 space-y-6">
                <img
                    src="../img/user.jpg"
                    alt="imagen del usuario"
                    className="w-24 h-24 rounded-full"
                />
                <p className="text-lg font-semibold">Nombre del Usuario</p>
                <p className="text-sm text-gray-600">Matrícula: 123456</p>
                <p className="text-sm text-gray-600">Contraseña: 123456</p>
            </div>

            <Logout />
        </aside>
    );
}
