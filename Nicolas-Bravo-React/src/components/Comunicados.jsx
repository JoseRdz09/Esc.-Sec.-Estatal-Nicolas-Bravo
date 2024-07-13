import React from 'react';

const Comunicados = ({ title, date, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="bg-persian-blue-950 text-white text-lg font-bold px-4 py-2">
        {title}
      </div>
      <div className="px-4 py-2">
        <div className="text-gray-600 text-sm">{date}</div>
        <p className="text-gray-800 mt-2">{content}</p>
      </div>
    </div>
  );
};

const ComunicadosSection = ({ announcements }) => {
  return (
    <section className="py-8 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Comunicados Importantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => (
            <Comunicados
              key={index}
              title={announcement.title}
              date={announcement.date}
              content={announcement.content}
            />
          ))}
        </div>
      </div>
      <hr className="w-full border-t-8 border-persian-blue-950 mt-4" />
    </section>
    
  );
};

export default ComunicadosSection;
