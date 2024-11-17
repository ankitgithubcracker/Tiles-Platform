import React from "react";
import { Form, Input, Button } from "antd";
// import "./App.css"; // Import the CSS file

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Feedback:", values);
  };

  return (
    <div className="contact-us-container">
      {/* Left Side - Content */}
      <div className="contact-us-left">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or just want to say hello? We'd love to hear
          from you! Fill out the form on the right, and we’ll get back to you as
          soon as possible.
        </p>
        <h3>Reach us directly:</h3>
        <p>
          📧 Email: <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
        <p>
          📞 Phone: <span>+91 (522) 123-4567</span>
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="contact-us-right">
        <h2>We'd Love to Hear from You!</h2>
        <Form onFinish={onFinish} className="contact-us-form" layout="vertical">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            name="feedback"
            rules={[{ required: true, message: "Please enter your feedback" }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="contact-us-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
