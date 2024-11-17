import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
// import "./App.css"; // Import the CSS file

const { Link } = Typography;

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between Login and Register

  // Handle login form submission
  const handleLogin = (values) => {
    console.log("Login Successful:", values);
  };

  // Handle register form submission
  const handleRegister = (values) => {
    console.log("Registration Successful:", values);
  };

  return (
    <div className="auth-form-container">
      {/* Left Side - Content */}
      <div className="auth-form-left">
        <h1>{isRegistering ? "Join Us Today!" : "Welcome Back!"}</h1>
        <p>
          {isRegistering
            ? "Create your account to access exclusive features and manage your profile."
            : "Unlock the door to seamless interactions and a world of possibilities. Log in to your account now to explore!"}
        </p>
      </div>

      {/* Right Side - Login/Register Form */}
      <div className="auth-form-right">
        {isRegistering ? (
          <>
            <h2>Register</h2>
            <Form
              name="register"
              onFinish={handleRegister}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Enter a valid email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="auth-form-button"
                >
                  Register
                </Button>
              </Form.Item>

              <p className="auth-form-link">
                Already have an account?{" "}
                <Link onClick={() => setIsRegistering(false)}>Login</Link>
              </p>
            </Form>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <Form
              name="login"
              onFinish={handleLogin}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Enter a valid email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="auth-form-button"
                >
                  Log In
                </Button>
              </Form.Item>

              <p className="auth-form-link">
                Don't have an account?{" "}
                <Link onClick={() => setIsRegistering(true)}>Register</Link>
              </p>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
