import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Asegúrate de que esta sea la instancia correcta de axios

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await api.post('/logout'); // Asegúrate de que el endpoint sea correcto
            localStorage.removeItem('token'); // Limpia el token del localStorage
            console.log('Token eliminado:', localStorage.getItem('token')); // Verifica que el token se haya eliminado
            navigate('/auth/login', { replace: true }); // Redirige al usuario a la página de login
            window.location.reload(true); // Forza la recarga completa de la página para evitar problemas de caché
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div className="my-5 px-5">
            <button
                type="button"
                className="text-center bg-persian-blue-950 hover:bg-indigo-800 text-white w-full rounded-2xl mt-5 p-3 uppercase font-bold cursor-pointer"
                onClick={handleLogout}
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Logout;
