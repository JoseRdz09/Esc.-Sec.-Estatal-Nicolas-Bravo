import React, { useState } from 'react';
import eventsData from '../data/events.json'; // Ruta al archivo JSON

const EventCarousel = () => {
  const [events, setEvents] = useState(
    eventsData.map(event => ({ ...event, currentImageIndex: 0 }))
  );
  const [editingEvent, setEditingEvent] = useState(null);

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleSave = (updatedEvent) => {
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
    setEditingEvent(null);
  };

  const nextImage = (eventIndex) => {
    const newEvents = [...events];
    const images = newEvents[eventIndex].imageUrls;
    newEvents[eventIndex].currentImageIndex = (newEvents[eventIndex].currentImageIndex + 1) % images.length;
    setEvents(newEvents);
  };

  const prevImage = (eventIndex) => {
    const newEvents = [...events];
    const images = newEvents[eventIndex].imageUrls;
    newEvents[eventIndex].currentImageIndex = (newEvents[eventIndex].currentImageIndex - 1 + images.length) % images.length;
    setEvents(newEvents);
  };

  return (
    <div className="w-full">
      <div className="w-full overflow-x-scroll whitespace-nowrap">
        {events.map((event, eventIndex) => (
          <div
            key={event.id}
            className="inline-block w-80 mx-2 bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <div className="relative">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1"
                onClick={() => prevImage(eventIndex)}
              >
                {'<'}
              </button>
              <img
                src={event.imageUrls[event.currentImageIndex]}
                alt={`${event.title} image`}
                className="w-full h-48 object-cover"
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1"
                onClick={() => nextImage(eventIndex)}
              >
                {'>'}
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
