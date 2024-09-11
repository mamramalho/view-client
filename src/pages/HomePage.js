import React from 'react';
import Calendar from '../components/Calendar';
import './HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <a href="/" className="logo">
          <span>V</span>
          <span>I</span>
          <span>E</span>
          <span>W</span>
        </a>
        <nav className="nav">
          <a href="/movies">Movies/TV Shows</a>
          <a href="/upcoming">Upcoming</a>
          <a href="/contact">Contact us</a>
        </nav>
        <div className="actions">
          <div class="box">
            <form name="search">
                <input type="text" class="input" name="txt"></input>
            </form>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <button className="signup">Signup</button>
        </div>
      </header>
      <div className="content">
        <Calendar />
      </div>
    </div>
  );
};

export default HomePage;
