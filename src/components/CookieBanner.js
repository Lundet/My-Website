// CookieBanner.js
import React from 'react';
import './CookieBanner.css'; // Assuming you have a CSS file for styling

const CookieBanner = ({ onAccept }) => {
  return (
    <div className="cookie-banner">
      <p>This website uses cookies to enhance the user experience.</p>
      <button onClick={onAccept}>Accept Cookies</button>
    </div>
  );
};

export default CookieBanner;
