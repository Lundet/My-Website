// CookieBanner.js
import React from 'react';
import '../styles/cookiebanner.css';

const CookieBanner = ({ onAccept }) => {
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    onAccept(); // Call the parent function to handle cookie acceptance
  };

  const hasConsented = localStorage.getItem('cookieConsent');

  if (hasConsented) {
    return null; // Don't render the banner if cookie consent is already accepted
  }

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <div className="button-container">
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;
