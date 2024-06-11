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
            <h3>Canvas Game</h3>
            <p>A browser-based game created using HTML5 Canvas and JavaScript.</p>
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
        <li>
          <div>
            <h3>Preschool Site</h3>
            <p>An end project for school, this preschool site is designed to be user-friendly and informative for both parents and teachers. Developed with a combination of HTML, CSS, and JavaScript, the site includes features like class schedules, teacher bios, and a gallery of student activities.</p>
          </div>
          <img src={preschoolSiteImage} alt="Preschool Site" />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
