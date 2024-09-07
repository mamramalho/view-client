import React from 'react';
import './Top.css';

const TopShows = () => {
  return (
    <div className="top-shows">
      <h2>Top TV Shows:</h2>
      <div className="shows">
        <div className="show">
          <img src="/path/to/community.jpg" alt="Community" />
          <p>Community</p>
        </div>
        <div className="show">
          <img src="/path/to/breaking-bad.jpg" alt="Breaking Bad" />
          <p>Breaking Bad</p>
        </div>
        <div className="show">
          <img src="/path/to/mad-men.jpg" alt="Mad Men" />
          <p>Mad Men</p>
        </div>
      </div>
    </div>
  );
};

export default TopShows;
