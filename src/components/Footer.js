import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <a href="mailto:hannes.j.lundin@gmail.com">hannes.j.lundin@gmail.com</a>
        <p>&copy; Hannes Lundin</p>
      </div>
    </footer>
  );
}

export default Footer;
