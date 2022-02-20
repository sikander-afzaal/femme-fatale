import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <div id="about" className="about">
      <Fade duration={2000}>
        <h1>
          We produce and craft <br /> <span>experiences to live.</span>
        </h1>
      </Fade>
      <Fade duration={2000} delay={200}>
        <p>
          Unique experiences that physically <br /> and emotionally engage the
          general public.
        </p>
      </Fade>
      <Fade duration={2000} delay={300}>
        <div className="line"></div>
      </Fade>
      <Fade duration={2000} delay={400}>
        <h1 className="list-h1">ON-SITE INSTALLATIONS /</h1>
      </Fade>
      <Fade duration={2000} delay={500}>
        <h1 className="list-h1">CLIPS & MOTION DESIGN /</h1>
      </Fade>
      <Fade duration={2000} delay={600}>
        {" "}
        <h1 className="list-h1">WEBSITES /</h1>
      </Fade>
      <Fade duration={2000} delay={700}>
        <h1 className="list-h1">VIRTUAL REALITY /</h1>
      </Fade>
      <Fade duration={2000} delay={800}>
        {" "}
        <h1 className="list-h1">AUGMENTED REALITY /</h1>
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
