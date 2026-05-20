import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Skills from '../components/Skills';
import profilePicture from '../images/pfp.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Webbutvecklare Helsingborg | Frilans React & WordPress Utvecklare</title>

        <link rel="canonical" href="https://hanneslundin.com/" />

        <meta
          name="description"
          content="Frilans webbutvecklare i Helsingborg som bygger moderna hemsidor och webbapplikationer i React, Node.js och WordPress. Hjälper företag i Skåne och Sverige."
        />

        <meta name="author" content="Hannes Lundin" />

        <meta property="og:title" content="Webbutvecklare Helsingborg | Hannes Lundin" />
        <meta
          property="og:description"
          content="Modern webbutveckling, hemsidor och webbappar för företag i Helsingborg, Skåne och Sverige."
        />
        <meta property="og:url" content="https://hanneslundin.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
      </Helmet>

      {/* HERO SECTION */}
      <div className="main-content">
        <div className="text-section">
          <h1>Webbutvecklare i Helsingborg & Skåne</h1>

          <h2>Freelance Web Developer | React, WordPress & Node.js</h2>

          <p>
            Hi! I'm Hannes Lundin, a freelance web developer based in Helsingborg, Sweden.
            I help companies build modern, fast and SEO-friendly websites and web applications.
          </p>

          <p>
            If you're looking to hire a web developer in Helsingborg or Skåne
            (anlita webbutvecklare i Helsingborg), I can help you with everything
            from simple websites to advanced web applications.
          </p>

          <p>
            I work with React, JavaScript, Node.js, PHP and WordPress to create
            scalable and user-friendly solutions for businesses.
          </p>

          <Link to="/about" className="about-button">
            <p>Learn more about me</p>
          </Link>
        </div>

        <div className="picture-section">
          <img
            src={profilePicture}
            alt="Hannes Lundin web developer Helsingborg"
            className="profile-picture"
            loading="lazy"
          />
        </div>

        <div className="skills-section">
          <Skills />
        </div>
      </div>

      {/* SERVICES / SEO SECTION */}
      <div className="seo-section">
        <h2>Web Development Services in Helsingborg</h2>

        <p>
          I offer professional web development services for businesses in Sweden,
          including Helsingborg, Malmö and the rest of Skåne.
        </p>

        <p>
          Services include custom websites, React applications, WordPress development,
          SEO optimization and full-stack web development.
        </p>
      </div>

      {/* QUICK LINKS */}
      <h2>Quick Links</h2>

      <div className="navigation-cards">
        <Link to="/projects" className="card">
          <h4>Projects</h4>
          <p>Explore my web development work</p>
        </Link>

        <Link to="/hobbies" className="card">
          <h4>Hobbies</h4>
          <p>Discover my interests</p>
        </Link>

        <Link to="/resume" className="card">
          <h4>Resume</h4>
          <p>View my experience</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;