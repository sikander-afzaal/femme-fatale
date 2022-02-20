import React from "react";
import "./Team.css";
import img from "../../../Assets/team.png";
function Team() {
  return (
    <div className="team">
      <h1>OUR TEAM</h1>
      <div className="team-grid">
        <div className="team-box">
          <img src={img} alt="" />
          <p>Cofounder & B&B Strategist</p>
          <h2>Mr. Epoh</h2>
        </div>
        <div className="team-box">
          <img src={img} alt="" />
          <p>Cofounder & Head Dev</p>
          <h2>Mr. Eigen</h2>
        </div>
        <div className="team-box">
          <img src={img} alt="" />
          <p>Advisor</p>
          <h2>Halina.eth</h2>
        </div>
      </div>
    </div>
  );
}

export default Team;
