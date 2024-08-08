import React from 'react';

const Comunicados = ({ title, date, content, logo }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="flex items-center bg-persian-blue-950 text-white text-xl font-bold px-6 py-4">
        {logo && <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />}
        {title}
      </div>
      <div className="px-6 py-4">
        <div className="text-gray-600 text-sm mb-2">{date}</div>
        <p className="text-gray-800 mt-2">{content}</p>
      </div>
    </div>
  );
};

const ComunicadosSection = ({ announcements }) => {
  return (
    <section className="py-10 bg-white w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Comunicados Importantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {announcements.map((announcement, index) => (
            <Comunicados
              key={index}
              title={announcement.title}
              date={announcement.date}
              content={announcement.content}
              logo={announcement.logo} // Añade el logo a cada anuncio
            />
          ))}
        </div>
      </div>
      <hr className="w-full border-t-8 border-persian-blue-950 mt-8" />
    </section>
  );
};

export default ComunicadosSection;
