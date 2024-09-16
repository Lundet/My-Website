// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Resume from './pages/Resume';
import CookieBanner from './components/CookieBanner'; // Import your CookieBanner component
import './App.css';

const TRACKING_ID = "G-TSN98DZJ0L"; // Replace with your Google Analytics Measurement ID

function initializeReactGA() {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(!localStorage.getItem('cookieConsent'));

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowCookieBanner(false);
  };

  initializeReactGA();

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
