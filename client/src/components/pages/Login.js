import React from "react";
import "../../App.css";
import "../HeroSection.css";
import LoginComponent from "../login/login.component";

function Login() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <LoginComponent />
    </div>
  );
}

export default Login;
