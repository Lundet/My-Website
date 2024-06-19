import React from 'react';
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
      <h2>Projects</h2>
      <p>
        Here are some of the projects I've worked on. You can also find the source code on GitHub: <a href={"https://github.com/Lundet?tab=repositories"} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </p>
      <ul>
        <li>
          <div>
            <h3>Preschool Site</h3>
            <p>An end project for school, this preschool site is designed to be user-friendly and informative for both parents and teachers.</p>
            <p>Developed with HTML, CSS, and JavaScript, the site includes features like class schedules, teacher bios, and a gallery of student activities.</p>
            <p>I designed the entire project from scratch and implemented a custom theme in WordPress.</p>
            <p><a href="https://solbarn.se/" target="_blank" rel="noopener noreferrer">https://solbarn.se/</a></p>

          </div>
          <img src={preschoolSiteImage} alt="Preschool Site" />
        </li>
        <li>
          <div>
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
        <li>
          <div>
            <h3>React Cinema Site</h3>
            <p>A cinema website developed with React, showcasing movie listings and details.</p>
          </div>
          <div className="image-container">
            <img src={reactCinemaImage1} alt="React Cinema Site" />
            <img src={reactCinemaImage2} alt="React Cinema Site" />
          </div>
        </li>
        <li>
          <div>
            <h3>PHP Book Review</h3>
            <p>A book review platform built with PHP and MySQL, allowing users to review and rate books.</p>
          </div>
          <img src={phpBookReviewImage} alt="PHP Book Review" />
        </li>
        <li>
          <div>
            <h3>Make Your Own Website</h3>
            <p>A PHP case where users can create their own websites using a custom-built platform.</p>
          </div>
          <img src={makeYourOwnWebsiteImage} alt="Make Your Own Website" />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
