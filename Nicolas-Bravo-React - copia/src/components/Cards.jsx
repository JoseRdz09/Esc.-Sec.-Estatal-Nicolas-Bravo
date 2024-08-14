import React, { useState, useEffect } from 'react';
import clienteAxios from '../config/axios'; // Asegúrate de que esta ruta sea correcta

const ImageCard = ({ imageSrc, title, link }) => (
  <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden block group">
    <img src={imageSrc || '../img/home2.png'} alt={title || 'Sin título'} className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-75" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
      {title || 'Sin título'}
    </div>
  </a>
);

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [title, setTitle] = useState('');
  const [pdfLink, setPdfLink] = useState('');

  useEffect(() => {
    // Solicitar las tarjetas desde la API
    clienteAxios.get('/api/cards')
      .then(response => {
        console.log('Datos obtenidos:', response.data);
        if (Array.isArray(response.data)) {
          setCards(response.data);
        } else {
          console.error('La respuesta de la API no es una lista:', response.data);
        }
      })
      .catch(error => console.error('Error al obtener las tarjetas:', error));
  }, []);

  const handleEditClick = (card) => {
    setSelectedCard(card);
    setImageSrc(card.imageSrc);
    setTitle(card.title);
    setPdfLink(card.pdfLink);
  };

  const handleSaveChanges = () => {
    if (selectedCard) {
      clienteAxios.put(`/api/cards/${selectedCard.id}`, {
        imageSrc,
        title,
        pdfLink,
      })
      .then(response => {
        console.log('Tarjeta actualizada:', response.data);
        setCards(cards.map(card => (card.id === selectedCard.id ? response.data : card)));
        setSelectedCard(null);
      })
      .catch(error => console.error('Error al actualizar la tarjeta:', error));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {cards.length > 0 ? (
          cards.map(card => (
            <div key={card.id} className="relative">
              <ImageCard 
                imageSrc={card.imageSrc} 
                title={card.title} 
                link={card.pdfLink} 
              />
              <button 
                onClick={() => handleEditClick(card)} 
                className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Editar
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron tarjetas.</p>
        )}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Editar Tarjeta</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Imagen:</label>
              <input
                type="text"
                value={imageSrc}
                onChange={(e) => setImageSrc(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Título:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Enlace del PDF:</label>
              <input
                type="text"
                value={pdfLink}
                onChange={(e) => setPdfLink(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <button
              onClick={handleSaveChanges}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Guardar Cambios
            </button>
            <button
              onClick={() => setSelectedCard(null)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
