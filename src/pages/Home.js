import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="hero-section text-white d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <h1 className="display-4">Empowering Change Together</h1>
        <p className="lead">Join hands with us to bring hope, help, and humanity to those in need.</p>
      </Container>
    </div>
  );
}

export default Home;
