import React, { useEffect } from "react";
import "./Hero.css";
import vid from "../../../Assets/vid4.mp4";
function Hero() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const vid = document.querySelector(".vid");
      if (window.scrollY > 200) {
        vid.pause();
      } else {
        vid.play();
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
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
