import React from "react";
import "./Hero.css";
import vid from "../../../Assets/vid.mp4";
function Hero() {
  return (
    <div className="hero">
      <video
        muted={true}
        loop={true}
        playsInline={true}
        autoPlay={true}
        src={vid}
        className="vid"
      ></video>
      <h1 className="hero-h1">
        Femme Fatale Studio <br /> is a creative studio of visual, <br />{" "}
        interactive & immersive experiences.
      </h1>
      <div className="scroll-div">
        <div className="arrow"></div>
        <div className="circle"></div>
        <p>Scroll</p>
      </div>
    </div>
  );
}

export default Hero;
