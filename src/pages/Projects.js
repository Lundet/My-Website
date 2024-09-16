import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/projects.css';
import canvasGameImage from '../images/canvas-game.png';
import reactCinemaImage1 from '../images/react1.png';
import reactCinemaImage2 from '../images/react2.png';
import phpBookReviewImage from '../images/book.review.png';
import makeYourOwnWebsiteImage from '../images/make-your-own-site.png';
import preschoolSiteImage from '../images/pree-school.png';

function Projects() {
  return (
    <section id="projects">
      <Helmet>
        <html lang="sv" />
        <title>Projekt - Hannes Lundin | Webbutvecklare</title>
        <link rel="canonical" href="https://hanneslundin.com/projects" />
        <meta
          name="description"
          content="Utforska projekten jag har arbetat med - från förskolesidor till canvas-spel och React-biografsidor. Besök min GitHub för mer information."
        />
        <meta
          name="keywords"
          content="webbutvecklare, projekt, förskolesida, canvas-spel, React-biografsida, PHP bokrecension, skapa din egen webbplats"
        />
      </Helmet>
      <h2>Projects</h2>
      <p>
        Here are some of the projects I've worked on. You can also find the source code on GitHub:{' '}
        <a
          href="https://github.com/Lundet?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        .
      </p>
      <ul className="project-list">
        <li className="project-item">
          <div className="project-details">
            <h3>Preschool Site</h3>
            <p>An end project for school, this preschool site is designed to be user-friendly and informative for both parents and teachers.</p>
            <p>Developed with HTML, CSS, and JavaScript, the site includes features like class schedules, teacher bios, and a gallery of student activities.</p>
            <p>I designed the entire project from scratch and implemented a custom theme in WordPress.</p>
            <p><a href="https://solbarn.se/" target="_blank" rel="noopener noreferrer">Visit the site</a></p>
          </div>
          <img src={preschoolSiteImage} alt="Preschool Site" />
        </li>
        <li className="project-item">
          <div className="project-details">
            <h3>Canvas Game</h3>
            <p>A browser-based game created using HTML5 Canvas and JavaScript.</p>
            <p>During this project I learned:</p>
            <ul>
              <li>Implementing websockets for real-time communication</li>
              <li>Using HTML5 Canvas for dynamic graphical elements</li>
              <li>Creating a well-documented codebase with regular git commits</li>
              <li>Developing a user-friendly interface</li>
              <li>Designed my own character and map</li>
              <li>Techniques for collision detection and animations</li>
              <li>Creating a lively chat functionality</li>
            </ul>
          </div>
          <img src={canvasGameImage} alt="Canvas Game" />
        </li>
        <li className="project-item">
          <div className="project-details">
            <h3>React Cinema Site</h3>
            <p>A full-fledged cinema booking website developed with React, showcasing current movie listings and detailed information.</p>
            <p>The site features:</p>
            <ul>
              <li>Interactive movie listings with showtimes and detailed movie information</li>
              <li>User-friendly interface for browsing and booking movie tickets</li>
              <li>Search functionality to find movies by title</li>
              <li>Responsive design for optimal viewing on various devices</li>
              <li>Integration with backend services to fetch real-time movie data</li>
            </ul>
          </div>
          <div className="image-container">
            <img src={reactCinemaImage1} alt="React Cinema Site 1" />
            <img src={reactCinemaImage2} alt="React Cinema Site 2" />
          </div>
        </li>
        <li className="project-item">
          <div className="project-details">
            <h3>PHP Book Review</h3>
            <p>A web application designed for book enthusiasts to manage and share their reviews. Built using PHP and MySQL, this platform enables users to log in securely, post detailed book reviews, rate books, and interact with a community of readers.</p>
            <p>The application includes user authentication to ensure secure access to personal review collections. Upon logging in, users can view and manage their own reviews, edit existing reviews, and delete reviews if necessary.</p>
            <p>Each book review entry is stored in a MySQL database with fields including title, author, publication year, review text, creation timestamp, and associated user ID for ownership.</p>
          </div>
          <img src={phpBookReviewImage} alt="PHP Book Review" />
        </li>

        <li className="project-item">
          <div className="project-details">
            <h3>Make Your Own Website</h3>
            <p>A full-stack PHP application where users can dynamically create and manage their own websites using a custom-built platform.</p>
            <p>Utilizing PHP for server-side logic and MySQL for data storage, this platform enables users to create web pages that can include text, images, and other media elements.</p>
            <p>Key features include:</p>
            <ul>
              <li>User registration and login system with password hashing for security.</li>
              <li>Ability for logged-in users to create, edit, and delete their own pages.</li>
              <li>Integration with an image database allowing users to manage image links associated with each unique page.</li>
              <li>Dynamic page retrieval using server-side rendering, ensuring content is fetched and displayed securely.</li>
              <li>Design implemented using a responsive CSS framework like Tailwind or Bootstrap, ensuring compatibility across different devices.</li>
            </ul>
          </div>
          <img src={makeYourOwnWebsiteImage} alt="Make Your Own Website" />
        </li>

      </ul>
    </section>
  );
}

export default Projects;
