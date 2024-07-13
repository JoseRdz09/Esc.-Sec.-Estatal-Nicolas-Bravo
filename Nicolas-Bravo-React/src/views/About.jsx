import React from 'react';

const SchoolInfo = () => {
  const sections = [
    {
      title: 'Mision y Visión',
      image: '../img/imgp.png', // Imagen compartida
      text: 'Nuestra visión es ser una institución líder en educación, reconocida por su excelencia académica y formación integral de los estudiantes.',
    },
    {
      title: 'Objetivo Social',
      image: '../img/imgp.png',
      text: 'Nuestro objetivo social es contribuir al desarrollo de la comunidad a través de la educación y la promoción de valores éticos y morales.',
    },
    {
      title: 'Principios',
      image: '../img/imgp.png',
      text: 'Nuestros principios se basan en la equidad, la inclusión, la responsabilidad y el respeto hacia todos los miembros de la comunidad educativa.',
    },
  ];

  return (
    <div className="container mx-auto p-6 mt-10"> {/* mt-20 para asegurar que el contenido aparezca debajo del navbar */}
      {sections.map((section, index) => (
        <div key={index} className="my-8 flex flex-col items-center text-center">
          <img src={section.image} alt={section.title} className="w-full h-96 object-cover rounded-md shadow-md mb-4" />
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          <p className="text-lg mb-4">{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SchoolInfo;
