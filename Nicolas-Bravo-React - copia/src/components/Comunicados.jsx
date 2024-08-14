import React, { useState } from 'react';
import clienteAxios from '../config/axios';

const Comunicados = ({ announcements, user, setAnnouncements }) => {
    const [newAnnouncement, setNewAnnouncement] = useState({
        title: '',
        date: '',
        content: '',
        logo: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const isAdmin = user?.admin === 1;

    const handleDelete = async (id) => {
        try {
            await clienteAxios.delete(`/api/announcements/${id}`);
            // Actualiza la lista de anuncios después de eliminar
            const response = await clienteAxios.get('/api/announcements');
            setAnnouncements(response.data);
        } catch (error) {
            console.error('Error eliminando el comunicado:', error);
        }
    };

    const handleAdd = async () => {
        try {
            const response = await clienteAxios.post('/api/announcements', newAnnouncement);
            const createdAnnouncement = response.data;

            // Verifica si createdAnnouncement tiene un id único y lo agrega al estado
            if (createdAnnouncement.id) {
                setAnnouncements((prevAnnouncements) => [...prevAnnouncements, createdAnnouncement]);
            } else {
                console.error('El anuncio creado no tiene un id:', createdAnnouncement);
            }

            // Limpia el formulario y cierra el modal
            setNewAnnouncement({
                title: '',
                date: '',
                content: '',
                logo: ''
            });
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error agregando el comunicado:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAnnouncement({
            ...newAnnouncement,
            [name]: value
        });
    };

    return (
        <section className="py-10 bg-white w-full">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Comunicados Importantes
                </h2>
                {isAdmin && (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4"
                    >
                        Agregar Comunicado
                    </button>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Array.isArray(announcements) && announcements.length > 0 ? (
                        announcements.map((announcement) => (
                            <div key={announcement.id} className="relative">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                                    <div className="flex items-center bg-persian-blue-950 text-white text-xl font-bold px-6 py-4">
                                        {announcement.logo && (
                                            <img
                                                src={`/logos/${announcement.logo}`}
                                                alt="Logo"
                                                className="w-10 h-10 mr-4"
                                            />
                                        )}
                                        {announcement.title}
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="text-gray-600 text-sm mb-2">
                                            {announcement.date}
                                        </div>
                                        <p className="text-gray-800 mt-2">
                                            {announcement.content}
                                        </p>
                                    </div>
                                </div>
                                {isAdmin && (
                                    <button
                                        onClick={() => handleDelete(announcement.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 absolute bottom-4 right-4"
                                    >
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No hay comunicados disponibles.</p>
                    )}
                </div>
            </div>
            <hr className="w-full border-t-8 border-persian-blue-950 mt-8" />

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">Agregar Nuevo Comunicado</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700">Título</label>
                            <input
                                type="text"
                                name="title"
                                value={newAnnouncement.title}
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Fecha</label>
                            <input
                                type="date"
                                name="date"
                                value={newAnnouncement.date}
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Contenido</label>
                            <textarea
                                name="content"
                                value={newAnnouncement.content}
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Logo</label>
                            <select
                                name="logo"
                                value={newAnnouncement.logo}
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="">Selecciona un logo</option>
                                <option value="task.png">Tarea</option>
                                <option value="megafono2.png">Alerta</option>
                                <option value="logo3.png">Logo 3</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleAdd}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4"
                            >
                                Agregar
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Comunicados;
