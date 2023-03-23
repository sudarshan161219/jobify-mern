import React from "react";
import {Link } from "react-router-dom";

import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from "../components/export"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info  */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            IPhone literally sustainable, deep v chillwave wayfarers fashion axe
            cronut. Pabst semiotics mustache af artisan woke next level tofu
            pitchfork iPhone. Drinking vinegar poke gluten-free unicorn
            letterpress williamsburg four loko paleo banh mi hell of activated
            charcoal selvage.
          </p>
          <Link to="/register" className="btn btn-hero">Login / Register</Link>
        </div>
        <img src={main} className="img main-img" alt="job hunt" />
      </div>
    </Wrapper>
  );
};



export default Landing;