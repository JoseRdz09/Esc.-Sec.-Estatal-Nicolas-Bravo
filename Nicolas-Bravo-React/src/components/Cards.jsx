import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ imageSrc, title, link }) => (
  <Link to={link} className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden block group">
    <img src={imageSrc} alt={title} className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-75" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
      {title}
    </div>
  </Link>
);

const Cards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <ImageCard imageSrc="../img/home2.png" title="INSCRIPCIONES" link="/inscripciones" />
    <ImageCard imageSrc="https://via.placeholder.com/400x300" title="REINSCRIPCION" link="/reinscripcion" />
    <ImageCard imageSrc="https://via.placeholder.com/400x300" title="CALENDARIO" link="/calendario" />
    <ImageCard imageSrc="https://via.placeholder.com/400x300" title="LISTA DE ACEPTADOS" link="/lista-aceptados" />
  </div>
);

export default Cards;
