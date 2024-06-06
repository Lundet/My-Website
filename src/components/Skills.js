// Skills.js
import React from 'react';
import '../styles/skills.css';
function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-tree">
        <ul>
          <li>Web Development
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>WordPress</li>
            </ul>
          </li>
          <li>Version Control
            <ul>
              <li>Git</li>
            </ul>
          </li>
          <li>Server-Side
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </li>
          <li>Databases
            <ul>
              <li>MySQL</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>Esports
            <ul>
              <li>League of Legends (Master Tier)</li>
              <li>Youtbe/Twitch</li>
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
  );
}

export default Skills;
