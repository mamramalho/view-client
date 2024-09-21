import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Calendar from '../components/Calendar';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className='gallery-section'>
        <Gallery />
      </div>
      <hr className='break-section'></hr>
      <div className="calendar-section">
        <Calendar />
      </div>
    </div>
  );
};

export default HomePage;
