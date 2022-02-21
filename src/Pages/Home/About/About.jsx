import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <div id="about" className="about">
      <Fade duration={2000}>
        <h1>
          Welcome to the Epoh Lounge Club! <br />{" "}
          <span>A new view of HOPE</span>
        </h1>
      </Fade>
      <Fade duration={2000} delay={200}></Fade>
      <Fade duration={2000} delay={300}>
        <div className="line"></div>
      </Fade>
      <Fade duration={2000} delay={400}>
        <h1 className="list-h1">Help us /</h1>
      </Fade>
      <Fade duration={2000} delay={500}>
        <h1 className="list-h1">reverse engineer HOPE /</h1>
      </Fade>
      <Fade duration={2000} delay={600}>
        {" "}
        <h1 className="list-h1">at the Epoh Lounge Club! /</h1>
      </Fade>

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
