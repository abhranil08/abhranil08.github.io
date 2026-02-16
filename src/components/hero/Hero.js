import React from "react";
import { Link } from "react-router-dom";
import { greeting } from "../../portfolio";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h1 className="hero-title">{greeting.title}</h1>
        <p className="hero-subtitle">{greeting.subTitle}</p>
        <div className="hero-cta">
          <Link to="/#projects" className="btn-primary">
            View My Work
          </Link>
          <Link to="/#contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
