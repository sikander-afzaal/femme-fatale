import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <h1>
        We produce and craft <br /> <span>experiences to live.</span>
      </h1>
      <p>
        Unique experiences that physically <br /> and emotionally engage the
        general public.
      </p>
      <div className="line"></div>
      <h1 className="list-h1">ON-SITE INSTALLATIONS /</h1>
      <h1 className="list-h1">CLIPS & MOTION DESIGN /</h1>
      <h1 className="list-h1">WEBSITES /</h1>
      <h1 className="list-h1">VIRTUAL REALITY /</h1>
      <h1 className="list-h1">AUGMENTED REALITY /</h1>
      <div className="about-arrow">
        <p>MORE ABOUT THE STUDIO</p>
        <div className="scroll-div">
          <div className="arrow"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
