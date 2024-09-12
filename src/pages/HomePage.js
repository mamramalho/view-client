import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Calendar from '../components/Calendar';
import './HomePage.css'; // Include a global style file for the page

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Gallery />
      <div className="calendar-section">
        <h2>Upcoming Shows</h2>
        <Calendar />
      </div>
    </div>
  );
};

export default HomePage;
