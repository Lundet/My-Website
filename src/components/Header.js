import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';


function Header() {
  return (
    <header>
      <h1>Hannes Lundin</h1>
      <p>Web Developer | Esports Enthusiast | Music Enjoyer</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">More About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
