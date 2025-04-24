import React from 'react';
import '../styles/skills.css';

function Skills() {
  return (
    <aside id="skills">
      <h2>Skills</h2>
      <div className="skill-tree">
        <ul className="tree">
          <li>
            <span className="category">Web Development</span>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>WordPress</li>
            </ul>
          </li>
          <li>
            <span className="category">Version Control</span>
            <ul>
              <li>Git</li>
            </ul>
          </li>
          <li>
            <span className="category">Server-Side</span>
            <ul>
              <li>.NET C#</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </li>
          <li>
            <span className="category">Databases</span>
            <ul>
              <li>MySQL</li>
            </ul>
          </li>
          <li>
            <span className="category">Esports</span>
            <ul>
              <li>League of Legends (Master Tier)</li>
              <li>YouTube/Twitch</li>
            </ul>
          </li>
          <li>
            <span className="category">Music Production</span>
            <ul>
              <li>FL Studio</li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Skills;