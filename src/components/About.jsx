import React from "react";
import { Row, Col, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { features } from "../utils/Data";
// import "./App.css"; // Import the CSS file

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-description">
          We are a trusted provider of premium marble and tiles, offering a wide
          range of designs and styles to suit every space. Our mission is to
          transform your home and office into stunning and functional
          environments.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">Why Choose Our Tiles?</h2>
        <Row gutter={[16, 16]}>
          {features.map((feature) => (
            <Col key={feature.id} xs={24} sm={12} md={6}>
              <Card hoverable className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action">
        <h2 className="call-to-action-title">Ready to Transform Your Space?</h2>
        <p className="call-to-action-description">
          Explore our extensive collection of premium tiles and marble. Let us
          help you create spaces that are both beautiful and functional.
        </p>
        <Button
          type="primary"
          size="large"
          className="call-to-action-button"
          onClick={() => navigate("/gallery")}
        >
          View Our Collection
        </Button>
      </div>
    </div>
  );
};

export default About;
