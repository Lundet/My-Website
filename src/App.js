import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Resume from './components/Resume';
import CookieBanner from './components/CookieBanner'; // Importera din CookieBanner-komponent här
import './App.css';

const TRACKING_ID = "G-TSN98DZJ0L"; // Ersätt med ditt Google Analytics mätning-ID

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

  initializeReactGA();

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
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
