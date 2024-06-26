import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Hannes Lundin</h1>
        <p>Web Developer | Esports Enthusiast | Music Enjoyer</p>
        <nav aria-label="Main Navigation">
          <ul>
            <li><Link to="/" title="Go to Home page">Home</Link></li>
            <li><Link to="/about" title="Learn more about Hannes Lundin">More About Me</Link></li>
            <li><Link to="/projects" title="View my Projects">Projects</Link></li>
            <li><Link to="/hobbies" title="Discover my Hobbies">Hobbies</Link></li>
            <li><Link to="/resume" title="Check out my Resume">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
