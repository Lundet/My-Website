// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Resume from './components/Resume';
import './App.css';

const TRACKING_ID = "G-TSN98DZJ0L"; // Ersätt med ditt Google Analytics mätning-ID

ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Analytics />
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

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return null;
}

export default App;
