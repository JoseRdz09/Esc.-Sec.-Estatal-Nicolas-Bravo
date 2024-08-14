import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import clienteAxios from '../config/axios'; // Ajusta la ruta según la ubicación de tu archivo
import useSWR from 'swr';

const fetcher = url => clienteAxios.get(url).then(res => res.data);

const EventGrid = () => {
  const location = useLocation();
  const { data: user } = useSWR('/api/user', fetcher);
  const isAdmin = user?.admin === 1; // Verifica si el usuario es admin

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', images: [] });
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await clienteAxios.get('/api/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Error fetching events.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    const formData = new FormData();
    formData.append('title', newEvent.title);
    formData.append('description', newEvent.description);

    imageFiles.forEach((file) => {
      formData.append('images[]', file);
    });

    try {
      const response = await clienteAxios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setEvents([...events, response.data]);
      setModalVisible(false);
      setNewEvent({ title: '', description: '', images: [] });
      setImageFiles([]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleFileChange = (e) => {
    setImageFiles([...e.target.files]);
  };

  const handleDeleteEvent = async (id) => {
    try {
      await clienteAxios.delete(`/api/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const responsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto py-8 z-10 relative">
      <h2 className="text-2xl text-center font-bold mb-4">Sección de Eventos</h2>

      {/* Botones de administración (solo visibles en /admin) */}
      {location.pathname === '/admin' && isAdmin && (
        <div className="mb-4 text-center">
          <button
            onClick={() => setModalVisible(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          >
            Agregar Evento
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.isArray(events) && events.slice(0, 2).map((event) => (
          <div key={event.id} className="p-4 border rounded-lg relative">
            <Carousel responsive={responsiveConfig} className="z-0">
              {JSON.parse(event.images).map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={`http://localhost:8000${image}`}
                    alt={`Image ${index}`}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ width: '100%', height: '300px' }}
                  />
                </div>
              ))}
            </Carousel>
            <h3 className="text-lg font-bold mt-2">{event.title}</h3>
            <p className="mt-2">{event.description}</p>
            
            {/* Botón de eliminar evento (solo visible en /admin) */}
            {location.pathname === '/admin' && isAdmin && (
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-lg"
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
        
      </div>

      {/* Modal para agregar evento */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2">
            <h3 className="text-lg font-bold mb-4">Agregar Evento</h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Título</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Descripción</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Imágenes</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setModalVisible(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddEvent}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {Array.isArray(events) && events.slice(2, 4).map((event) => (
          <div key={event.id} className="p-4 border rounded-lg relative">
            <Carousel responsive={responsiveConfig} className="z-0">
              {JSON.parse(event.images).map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={`meta.env.VITE_API_URL${image}`}
                    alt={`Image ${index}`}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ width: '100%', height: '300px' }}
                  />
                </div>
              ))}
            </Carousel>
            <h3 className="text-lg font-bold mt-2">{event.title}</h3>
            <p className="mt-2">{event.description}</p>
            
            {/* Botón de eliminar evento (solo visible en /admin) */}
            {location.pathname === '/admin' && isAdmin && (
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-lg"
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
      </div>
      <hr className="w-full border-t-8 border-persian-blue-950 mt-8" />
    </div>
  );
};

export default EventGrid;
