// Hobbies.js
import React from 'react';
import '../styles/hobbies.css';
function Hobbies() {
  return (
    <div className="main">
      <section>
        <h2>Hobbies</h2>
        <p>
          In my free time, I'm not just a web developer—I'm a multifaceted individual with diverse interests that
          shape my creativity and character.
        </p>

        <h1>Esports and Streaming</h1>
        <p>
          One of my passions is esports. I've dedicated a significant amount of time to the competitive scene,
          particularly in League of Legends, where I've achieved Master Tier. This pursuit reflects my competitive
          nature, strategic mindset, and commitment to continuous improvement.
        </p>
        <p>
          I also enjoy sharing my gaming experiences with a broader audience through streaming platforms. You can
          catch me live on <a href="https://www.twitch.tv/lundet" target="_blank" rel="noopener noreferrer">Twitch</a>, where I engage with
          viewers, and provide my league of legends gameplay.
        </p>

        <h1>Music Production</h1>
        <p>
          Another avenue through which I express my creativity is music production. Using FL Studio, I craft beats
          and tunes that serve as a counterbalance to the analytical world of coding. Music is not just a hobby
          for me; it's a therapeutic escape and a form of self-expression.
        </p>
        {/* Add any additional hobbies or interests here */}
      </section>
    </div>
  );
}

export default Hobbies;
