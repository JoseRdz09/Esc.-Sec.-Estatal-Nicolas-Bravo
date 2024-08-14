import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from "../components/AdminSidebar";
import { useAuth } from '../hooks/useAuth';
import EventCarousel from '../components/EventCarousel';
import Comunicados from '../components/Comunicados'; // Importa el componente
import clienteAxios from '../config/axios'; // Asegúrate de importar correctamente el clienteAxios
import Cards from '../components/Cards';

export default function AdminLayout() {
    // Obtén el usuario con el hook useAuth
    const { user } = useAuth({ middleware: 'admin' });

    // Estado para almacenar los anuncios
    const [announcements, setAnnouncements] = React.useState([]);

    // Fetch anuncios al montar el componente
    React.useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await clienteAxios.get('/api/announcements');
                setAnnouncements(response.data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className='md:flex'>
            <AdminSidebar />

            <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
                {/* Important Announcements Section */}
                {user ? (
                    <Comunicados
                        announcements={Array.isArray(announcements) ? announcements : []}
                        user={user}
                        setAnnouncements={setAnnouncements} // Asegúrate de pasar esta función
                    />
                ) : (
                    <p>Cargando...</p>
                )}

                <EventCarousel />

                <Cards />

                <Outlet /> {/* Esto renderiza los componentes anidados en el enrutador */}
            </main>
        </div>
    );
}
