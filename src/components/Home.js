import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';
import profilePicture from '../images/profile-picture.jpg';
import '../styles/home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="text-section">
          <h1>Hannes Lundin</h1>
          <h2>Welcome to My Website</h2>
          <p>
            Hello! My name is Hannes Lundin, and I'm a passionate web developer with a background in game development and technology. I thrive on challenges and have a strong foundation in HTML, CSS, JavaScript, PHP, MySQL, and Node.js. My journey into coding began in high school, and I've been on a quest for knowledge ever since.
          </p>    
          <Link to="/about" className="about-button">
            <p>Learn more about me</p>
          </Link>
        </div>
        <div className="picture-section">
          <img src={profilePicture} alt="Profile of Hannes Lundin" className="profile-picture" />
        </div>
        <div className="skills-section">
          <Skills />
        </div>
      </div>
      <h1>Quick Links</h1>
      <div className="navigation-cards">
        <Link to="/projects" className="card">
          <h4>Projects</h4>
          <p>Explore my projects</p>
        </Link>
        <Link to="/hobbies" className="card">
          <h4>Hobbies</h4>
          <p>Discover my hobbies</p>
        </Link>
        <Link to="/resume" className="card">
          <h4>Resume</h4>
          <p>View my resume</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
