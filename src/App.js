import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import VolunteerForm from './VolunteerForm';
import About from './About';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#hero">Helping Hands NGO</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#volunteer">Volunteer Form</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="hero" className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4">Making the World a Better Place</h1>
          <p className="lead">Join Helping Hands NGO in spreading kindness, education, and care.</p>
        </div>
      </section>
      <section id="volunteer" className="py-5 bg-white">
        <div className="container">
          <VolunteerForm />
        </div>
      </section>
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <About />
        </div>
      </section>
      <footer className="bg-success text-white text-center p-3">
        © 2025 Helping Hands NGO. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
