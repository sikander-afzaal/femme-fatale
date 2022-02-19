import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
    </div>
  );
}

export default Home;
