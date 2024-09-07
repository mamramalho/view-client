import React from 'react';
import './Top.css';

const TopMovies = () => {
  return (
    <div className="top-movies">
      <h2>Top Movies:</h2>
      <div className="movies">
        <div className="movie">
          <img src="/path/to/avatar.jpg" alt="Avatar" />
          <p>Avatar</p>
        </div>
        <div className="movie">
          <img src="/path/to/top-gun.jpg" alt="Top Gun" />
          <p>Top Gun</p>
        </div>
        <div className="movie">
          <img src="/path/to/jurassic-world.jpg" alt="Jurassic World" />
          <p>Jurassic World</p>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
