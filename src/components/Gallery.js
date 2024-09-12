import React from 'react';
import './Gallery.css'; // Create this file for styling

const Gallery = () => {
  const featuredItems = [
    { id: 1, title: 'Show 1', image: 'https://via.placeholder.com/400x600' },
    { id: 2, title: 'Show 2', image: 'https://via.placeholder.com/400x600' },
    { id: 3, title: 'Show 3', image: 'https://via.placeholder.com/400x600' },
    { id: 4, title: 'Show 4', image: 'https://via.placeholder.com/400x600' },
    { id: 5, title: 'Show 5', image: 'https://via.placeholder.com/400x600' },
    { id: 6, title: 'Show 6', image: 'https://via.placeholder.com/400x600' },
  ];

  return (
    <div className="gallery">
      {featuredItems.map(item => (
        <div className="gallery-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="overlay">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
