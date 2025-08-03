import React from 'react';
import AboutUs from './AboutUs';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1>Empower Communities, Change Lives</h1>
          <p>Join us in creating a better tomorrow by volunteering today.</p>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default Home;
