import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Categories from "./Categories/Categories.jsx";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Categories />
    </div>
  );
}

export default Home;
