import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/about.css';

function About() {
  return (
    <div className="about-container">
      <Helmet>
        <title>Om Mig | Webbutvecklare i Helsingborg - Hannes Lundin</title>

        <meta
          name="description"
          content="Hannes Lundin är en webbutvecklare i Helsingborg som bygger moderna hemsidor och webbapplikationer i React, Node.js och WordPress."
        />

        <meta
          property="og:title"
          content="Om Mig | Webbutvecklare Helsingborg - Hannes Lundin"
        />

        <meta
          property="og:description"
          content="Webbutvecklare i Helsingborg med fokus på moderna webbapplikationer, React och fullstack utveckling."
        />

        <meta property="og:image" content="%PUBLIC_URL%/profile-picture.jpg" />
        <meta property="og:url" content="https://hanneslundin.com/about" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://hanneslundin.com/about" />
      </Helmet>
      <section id="about">
        <h2>About Me</h2>
        <p className="about-text">
          Hey there! I'm Hannes Lundin, a 25-year-old web developer based in Helsingborg. I'm passionate about coding and creating cool stuff. My journey into programming started with gaming and game development during high school, and eventually, I ventured into web development as well.
        </p>
        <p className="about-text">
          I'm primarily seeking freelance opportunities where I can work independently and remotely. However, I'm open to exploring various job opportunities that align with my skills and interests.
        </p>
        <p className="about-text">
          While I'm constantly striving to improve my skills, I find styling to be particularly challenging. Currently, I'm focused on mastering React, and this very site you're on is built using React.
        </p>
        <p className="about-text">
          When I'm not coding, you can catch me playing games like League of Legends or experimenting with music production using FL Studio. I'm always up for a challenge and enjoy pushing my limits in both gaming and music.
        </p>
        <p className="about-text">
          I've had the honor of reaching Master Tier in League of Legends, which represents the top 0.5% of players. Additionally, I've pursued esports studies for two years, further deepening my understanding of the gaming industry.
        </p>
        <p className="about-text">
          Music has always been a passion of mine, and I've recently started creating remixes for my own enjoyment. It's an exciting complement to my web development journey, adding another dimension to my creative pursuits.
        </p>
      </section>
    </div>
  );
}

export default About;