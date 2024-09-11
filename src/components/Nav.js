import React from 'react';
import './Nav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="header">
        <a href="/" className="logo">
          <span>V</span>
          <span>I</span>
          <span>E</span>
          <span>W</span>
        </a>
        <nav className="nav">
            <NavLink to="/movies" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Movies</NavLink>
            <NavLink to="/tvshows" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>TV Shows</NavLink>
            <NavLink to="/contact" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact Us</NavLink>
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
  );
};

export default Nav;
