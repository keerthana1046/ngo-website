// src/pages/AboutUs.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>About Our NGO</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="about.jpg"
            alt="About us"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow-lg border-0">
            <Card.Body>
              <Card.Text style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Our NGO is committed to transforming communities by empowering individuals through education, healthcare, and sustainable livelihood. We believe in creating opportunities for everyone and strive to make a lasting impact with compassion and transparency. Our dedicated team and volunteers work tirelessly to uplift the underprivileged and ensure their voices are heard.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
