// About.js
import React from 'react';
import '../styles/about.css';
function About() {
  return (
    <div className="main-content">
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello! My name is Hannes Lundin, and I'm a passionate web developer with a background in game development and technology. I thrive on challenges and have a strong foundation in HTML, CSS, JavaScript, PHP, MySQL, and Node.js. My journey into coding began in high school, and I've been on a quest for knowledge ever since.
        </p>
        <p>
          When I'm not coding, you can find me immersed in the competitive world of esports, especially in League of Legends where I've achieved Master Tier. Additionally, I explore my creative side through music production using FL Studio, adding another dimension to my skill set.
        </p>
        <p>
          Join me on this exciting journey as I continue to grow and evolve in the dynamic landscape of technology.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skill-tree">
          <ul>
            <li>Web Development
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>React</li>
                <li>WordPress</li>
                <li>Git</li>
              </ul>
            </li>
            <li>Databases
              <ul>
                <li>MySQL</li>
              </ul>
            </li>
            <li>Server-Side
              <ul>
                <li>Express.js</li>
                <li>Node.js</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Esports
              <ul>
                <li>League of Legends (Master Tier)</li>
              </ul>
            </li>
            <li>Music Production
              <ul>
                <li>FL Studio</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
