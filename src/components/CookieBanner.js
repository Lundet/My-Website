// CookieBanner.js
import React from 'react';

const CookieBanner = ({ onAccept }) => {
  return (
    <div className="cookie-banner">
      <p>Denna webbplats använder cookies för att förbättra användarupplevelsen.</p>
      <button onClick={onAccept}>Acceptera cookies</button>
    </div>
  );
};

export default CookieBanner;
