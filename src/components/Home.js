import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Skills from './Skills';
import profilePicture from '../images/pfp.jpg';
import '../styles/home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Anlita en Webbutvecklare i Helsingborg, Skåne</title>
        <meta name="description" content="Hannes Lundin - Passionerad webbutvecklare i Helsingborg. Specialiserad på HTML, CSS, JavaScript, PHP, MySQL och Node.js. Upptäck mitt portfolio och anlita en erfaren utvecklare idag!" />
        <meta name="keywords" content="anlita webbutvecklare, hyr webbutvecklare, webbutvecklare, webbutvecklare Helsingborg, webbutvecklare Skåne, webdesigner Helsingborg, webdesigner Skåne, frilans webbutvecklare, webbutveckling, WordPress utvecklare, hire a web developer, Helsingborg, Skåne, Sverige, webbutvecklare Stockholm, webbutvecklare Göteborg, web designer Malmö, HTML, CSS, JavaScript, PHP, MySQL, Node.js, webbdesign, webbdesigner, hemsida utvecklare, frilansare, hemsida, webbsida, webbapplikation, fullstack utvecklare, frontend utvecklare, backend utvecklare" />
        <meta name="author" content="Hannes Lundin" />
        <meta property="og:title" content="Anlita Webbutvecklare Helsingborg - Hannes Lundin | Portfolio"/>
        <meta property="og:description" content="Hannes Lundin - Webbutvecklare specialiserad på HTML, CSS, JavaScript, PHP, MySQL och Node.js. Utforska mitt portfolio, projekt och hobbyer. Anlita en erfaren webbutvecklare i Helsingborg, Skåne eller andra delar av Sverige." />
        <meta property="og:url" content="https://hanneslundin.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hannes Lundins Portfolio" />
        <meta property="og:locale" content="sv_SE" />
      </Helmet>

      {/* Your JSX content for the Home component */}
      <div className="main-content">
        <div className="text-section">
          <h1>Hannes Lundin - Webdeveloper in Helsingborg</h1>
          <h2>Welcome to My Website</h2>
          <p>
            Hello! My name is Hannes Lundin, and I'm a passionate web developer with a background in game development and technology. I thrive on challenges and have a strong foundation in HTML, CSS, JavaScript, PHP, MySQL, and Node.js. My journey into coding began in high school, and I've been on a quest for knowledge ever since.
          </p>
          <Link to="/about" className="about-button">
            <p>Learn more about me</p>
          </Link>
        </div>
        <div className="picture-section">
          <img src={profilePicture} alt="Profile of Hannes Lundin" className="profile-picture" loading="lazy" />
        </div>
        <div className="skills-section">
          <Skills />
        </div>
      </div>

      {/* Quick Links Navigation */}
      <h2>Quick Links</h2>
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
