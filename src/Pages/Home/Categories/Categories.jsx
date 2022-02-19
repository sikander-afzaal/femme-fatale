import React from "react";
import "./Categories.css";
import img1 from "../../../Assets/img1.png";
import img2 from "../../../Assets/img2.png";
import img3 from "../../../Assets/img3.png";
function Categories() {
  return (
    <div className="category">
      <div className="category-box">
        <div className="img-category">
          <img src={img1} alt="" />
        </div>
        <div className="desc-category">
          <h1>MUSEUMS & CULTURE</h1>
          <p className="desc-cate">
            For international cultural institutions, we create educational and
            entertaining content in the form of interactive and audiovisual
            installations to be experienced in a museum pathway. We also
            accompany the production of documentaries and audiovisual programmes
            for the general public
          </p>
          <div className="scroll-div-category">
            <p>SEE OUR CULTURE PROJECTS</p>
            <div className="arrow-div-cate">
              <div className="arrow-outer">
                {" "}
                <div className="arrow-cate"></div>
              </div>

              <div className="circle-cate"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-box2">
        <div className="img-category">
          <img src={img2} alt="" />
        </div>
        <div className="desc-category">
          <h1>ENTERTAINMENT</h1>
          <p className="desc-cate">
            We develop a wide range of interactive and animated entertainment:
            web experiences, music videos, VR narrations, visual and sensitive
            experiences that accompany original universes and stories.
          </p>
          <div className="scroll-div-category">
            <p>SEE OUR ENTERTAINMENT PROJECTS</p>
            <div className="arrow-div-cate">
              <div className="arrow-outer">
                {" "}
                <div className="arrow-cate"></div>
              </div>

              <div className="circle-cate"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-box">
        <div className="img-category">
          <img src={img3} alt="" />
        </div>
        <div className="desc-category">
          <h1>BRANDS & CONTENT</h1>
          <p className="desc-cate">
            We work for leading international brands, helping them to express
            their identity and reach their audience in a way that is new,
            exciting and engaging. Whether online or in-store, the aim is to
            reach the audience and create a real community.
          </p>
          <div className="scroll-div-category">
            <p>SEE OUR BRANDS PROJECTS</p>
            <div className="arrow-div-cate">
              <div className="arrow-outer">
                {" "}
                <div className="arrow-cate"></div>
              </div>

              <div className="circle-cate"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
