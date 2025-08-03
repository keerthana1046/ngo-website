// src/pages/VolunteerForm.js
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      availability: "",
      interest: "",
      message: ""
    });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>Become a Volunteer</h2>
      <Card className="p-4 shadow-lg border-0">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Availability</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Weekends, Evenings"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Area of Interest</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Teaching, Event Planning"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Why do you want to volunteer?"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default VolunteerForm;
