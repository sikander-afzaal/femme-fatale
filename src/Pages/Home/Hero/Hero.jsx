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
        Welcome to the Epoh Lounge Club! <br />A new view of HOPE <br /> Help us
        reverse engineer HOPE at the Epoh Lounge Club!
      </h1>
      <a
        style={{ textDecoration: "none" }}
        href="#about"
        className="scroll-div"
      >
        <div className="arrow"></div>
        <div className="circle"></div>
        <p>Scroll</p>
      </a>
    </div>
  );
}

export default Hero;
