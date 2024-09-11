import React, { useState } from 'react';
import './Movies.css';
import MostWatched from '../components/Movies/MostWatched';
import AddedRec from '../components/Movies/AddedRec';
import Upcoming from '../components/Movies/Upcoming';

const Movies = () => {
  const [activeTab, setActiveTab] = useState('MostWatched');

  const renderComponent = () => {
    switch (activeTab) {
      case 'MostWatched':
        return <MostWatched />;
      case 'AddedRec':
        return <AddedRec />;
      case 'Upcoming':
        return <Upcoming />;
      default:
        return <MostWatched />;
    }
  };

  return (
    <div className="movies-container">
      <h1 className='movies-title'>Movies</h1>
      <nav className="movies-nav">
        <button
          className={`nav-item ${activeTab === 'MostWatched' ? 'active' : ''}`}
          onClick={() => setActiveTab('MostWatched')}
        >
          Most Watched
        </button>
        <button
          className={`nav-item ${activeTab === 'AddedRec' ? 'active' : ''}`}
          onClick={() => setActiveTab('AddedRec')}
        >
          Added Recently
        </button>
        <button
          className={`nav-item ${activeTab === 'Upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('Upcoming')}
        >
          Upcoming
        </button>
      </nav>

      <div className="movies-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Movies;
