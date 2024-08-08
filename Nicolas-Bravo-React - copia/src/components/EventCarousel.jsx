import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import eventsData from '../data/events.json'; // Ajusta la ruta según la estructura de tu proyecto

const EventGrid = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulamos la carga de eventos desde el archivo JSON importado
    setEvents(eventsData);
  }, []);

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

  return (
    <div className="container mx-auto py-8 z-10 relative">
      <h2 className="text-2xl text-center font-bold mb-4">Sección de Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.slice(0, 2).map((event) => (
          <div key={event.id} className="p-4 border rounded-lg relative">
            <Carousel responsive={responsiveConfig} className="z-0">
              {event.images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ width: '100%', height: '300px' }}
                  />
                </div>
              ))}
            </Carousel>
            <h3 className="text-lg font-bold mt-2">{event.title}</h3>
            <p className="mt-2">{event.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {events.slice(2, 4).map((event) => (
          <div key={event.id} className="p-4 border rounded-lg relative">
            <Carousel responsive={responsiveConfig} className="z-0">
              {event.images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ width: '100%', height: '300px' }}
                  />
                </div>
              ))}
            </Carousel>
            <h3 className="text-lg font-bold mt-2">{event.title}</h3>
            <p className="mt-2">{event.description}</p>
          </div>
        ))}
      </div>
      <hr className="w-screen border-t-8 border-persian-blue-950 mt-4 relative left-1/2 transform -translate-x-1/2" />
    </div>
  );
};

export default EventGrid;
