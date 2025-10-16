import React from 'react';

export default function MovieCard({ title, image }) {
  return (
    <div className="w-40 m-2">
      <img src={image} alt={title} className="w-full rounded-lg" />
      <h2 className="text-white mt-2">{title}</h2>
    </div>
  );
}
