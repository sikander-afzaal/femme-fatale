import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Categories from "./Categories/Categories.jsx";
import Nft from "./Nft/Nft.jsx";
import Team from "./Team/Team.jsx";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Categories />
      <Nft />
      <Team />
    </div>
  );
}

export default Home;
