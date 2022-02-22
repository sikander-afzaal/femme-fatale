import React from "react";
import "./Team.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import img from "../../../Assets/Team/mreigen.jpeg";
import img2 from "../../../Assets/Team/mrepoh.jpeg";
// import img3 from "../../../Assets/Team/mrsean.jpeg";
import img4 from "../../../Assets/Team/msdaniel.jpg";
// import img5 from "../../../Assets/Team/mshalina.jpeg";
function Team() {
  return (
    <div className="team">
      <h1>OUR TEAM</h1>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          pauseOnHover: false,
          resetProgress: false,
          height: "auto",
          loop: true,
          width: "90%",
          gap: "5rem",
          arrows: false,

          pagination: true,
          drag: true,
          perMove: 1,
          breakpoints: {
            1260: {
              perPage: 2,
            },
            740: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="team-box">
            <img src={img2} alt="" />
            <div className="text-box-team">
              <p>Cofounder & B&B Strategist</p>
              <h2>Mr. Epoh</h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="team-box">
            <img src={img} alt="" />
            <div className="text-box-team">
              {" "}
              <p>Cofounder & Head Dev</p>
              <h2>Mr. Eigen</h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="team-box">
            <img src={img4} alt="" />
            <div className="text-box-team">
              {" "}
              <p>Advisor</p>
              <h2>Halina.eth</h2>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Team;
