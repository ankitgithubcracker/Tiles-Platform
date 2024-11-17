import React, { useState } from "react";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
// import "./SignUp.css";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="signup">
      {isLogin ? (
        <LoginForm toggle={() => setIsLogin(false)} />
      ) : (
        <RegisterForm toggle={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default SignUp;
