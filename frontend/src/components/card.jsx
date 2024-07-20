// src/Card.js
import React from 'react';

const Card = ({ title, content, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-full max-w-xs">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
