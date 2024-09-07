import React from 'react';
import Calendar from '../components/Calendar';
import TopShows from '../components/TopShows';
import TopMovies from '../components/TopMovies';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">VIEW</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/movies">Movies/TV Shows</a>
          <a href="/upcoming">Upcoming</a>
          <a href="/contact">Contact us</a>
        </nav>
        <div className="actions">
          <input type="text" className="search" placeholder="Search..." />
          <button className="signup">Signup</button>
        </div>
      </header>
      <div className="content">
        <Calendar />
        <div className="sidebar">
          <TopShows />
          <TopMovies />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
