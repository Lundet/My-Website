import React from 'react';

const CookieBanner = ({ onAccept }) => {
  return (
    <div className="cookie-banner">
      <p>Vi använder cookies för att förbättra din upplevelse på vår webbplats.</p>
      <button onClick={onAccept}>Acceptera cookies</button>
    </div>
  );
};

export default CookieBanner;
