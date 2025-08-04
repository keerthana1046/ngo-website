import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Our NGO</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        We are a non-profit organization dedicated to improving lives through education, healthcare, and community outreach.
        Our mission is to create lasting change by empowering individuals and communities to achieve their full potential.
        With the support of our volunteers and partners, we work across various regions to bring hope, support, and opportunity where it's needed most.
      </p>
    </Container>
  );
}

export default About;
