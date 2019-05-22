import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p>Home</p>
      </Link>

      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/">
          <li>MainPage</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
