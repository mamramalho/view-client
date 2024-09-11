import React from 'react';
import Calendar from '../components/Calendar';
import './HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <Calendar />
      </div>
    </div>
  );
};

export default HomePage;
