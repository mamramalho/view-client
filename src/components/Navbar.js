import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavSolid(true);
      } else {
        setNavSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navSolid ? 'solid' : ''}`}>
        <a href="/" className="logo">
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
        </a>
        <ul className="nav-links">
            <NavLink to="/movies" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Movies</NavLink>
            <NavLink to="/tvshows" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>TV Shows</NavLink>
            <NavLink to="/contact" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact Us</NavLink>
        </ul>
        <div class="search-signup-container">
            <div class="box">
                <form name="search">
                    <input type="text" class="input" name="txt"></input>
                </form>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button className="signup">Signup</button>
        </div>
    </nav>
  );
};

export default Navbar;
