import React from 'react';

const InfoSection = ({ imageUrl, title, text, imageLeft }) => {
  return (
    <div className="w-full">
      <div className={`flex flex-col items-center my-8 w-full md:flex-row ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <img src={imageUrl} alt="info" className="w-full md:w-1/2 h-64 md:h-80 object-cover mx-4 mb-4 md:mb-0" />
        <div className="w-full md:w-1/2 text-lg p-4 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <hr className="w-full border-t-8 border-gray-300 mt-4" />
    </div>
  );
};

export default InfoSection;
