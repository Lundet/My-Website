// Projects.js
import React from 'react';
import '../styles/projects.css';
function Projects() {
  return (
    <div className="main">
      <section id="projects">
        <h2>Projects</h2>
        <p>
          Here are some of the projects I've worked on:
        </p>
        <ul>
          <li>
            <h3>Canvas Game</h3>
            <p>A browser-based game created using HTML5 Canvas and JavaScript.</p>
            <img src="/path/to/canvas-game-image.jpg" alt="Canvas Game" />
          </li>
          <li>
            <h3>React Cinema Site</h3>
            <p>A cinema website developed with React, showcasing movie listings and details.</p>
            <img src="/path/to/react-cinema-site-image.jpg" alt="React Cinema Site" />
          </li>
          <li>
            <h3>PHP Book Review</h3>
            <p>A book review platform built with PHP and MySQL, allowing users to review and rate books.</p>
            <img src="/path/to/php-book-review-image.jpg" alt="PHP Book Review" />
          </li>
          <li>
            <h3>Preschool Site</h3>
            <p>
              An end project for school, this preschool site is designed to be user-friendly and informative for both parents and teachers. Developed with a combination of HTML, CSS, and JavaScript, the site includes features like class schedules, teacher bios, and a gallery of student activities.
            </p>
            <img src="/path/to/preschool-site-image.jpg" alt="Preschool Site" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
