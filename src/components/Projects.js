import React from 'react';
import '../styles/projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        Here are some of the projects I've worked on. You can also find the source code on GitHub: <a href={"https://github.com/Lundet?tab=repositories"} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </p>
      <ul>
        <li>
          <img src="/path/to/canvas-game-image.jpg" alt="Canvas Game" />
          <div>
            <h3>Canvas Game</h3>
            <p>A browser-based game created using HTML5 Canvas and JavaScript.</p>
          </div>
        </li>
        <li>
          <div className="image-container">
            <img src="/path/to/react-cinema-site-image1.jpg" alt="React Cinema Site Image 1" />
            <img src="/path/to/react-cinema-site-image2.jpg" alt="React Cinema Site Image 2" />
          </div>
          <div>
            <h3>React Cinema Site</h3>
            <p>A cinema website developed with React, showcasing movie listings and details.</p>
          </div>
        </li>

        <li>
          <img src="/path/to/php-book-review-image.jpg" alt="PHP Book Review" />
          <div>
            <h3>PHP Book Review</h3>
            <p>A book review platform built with PHP and MySQL, allowing users to review and rate books.</p>
          </div>
        </li>
        <li>
          <img src="/path/to/make-your-own-website-image.jpg" alt="Make Your Own Website" />
          <div>
            <h3>Make Your Own Website</h3>
            <p>A PHP case where users can create their own websites using a custom-built platform.</p>
          </div>
        </li>
        <li>
          <img src="/path/to/preschool-site-image.jpg" alt="Preschool Site" />
          <div>
            <h3>Preschool Site</h3>
            <p>
              An end project for school, this preschool site is designed to be user-friendly and informative for both parents and teachers. Developed with a combination of HTML, CSS, and JavaScript, the site includes features like class schedules, teacher bios, and a gallery of student activities.
            </p>
          </div>
        </li>


      </ul>
    </section>
  );
}

export default Projects;
