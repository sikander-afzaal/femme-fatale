import React, { useState } from "react";
import "./Nft.css";
import vid1 from "../../../Assets/vid1.mp4";
import vid2 from "../../../Assets/vid2.mp4";
import vid3 from "../../../Assets/vid3.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import vid4 from "../../../Assets/vid4.mp4";
function Nft() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nft">
      <h1 className="nft-h1">OUR NFT's</h1>{" "}
      <p className="nft-desc">
        Some of our virtual properties/galleries are revealed
      </p>
      <div onClick={() => setOpen(true)} className="scroll-div-category">
        <p>Click to find more:</p>
        <div className="arrow-div-cate">
          <div className="arrow-outer">
            {" "}
            <div className="arrow-cate"></div>
          </div>

          <div className="circle-cate"></div>
        </div>
      </div>
      <div className={`overlay-5 ${open ? "flex" : ""}`}></div>
      <div className={`pop-up-nft ${open ? "flex" : ""}`}>
        <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(false)} />
        <h1>GALLERY</h1>
        <div className="video-grid">
          <video
            muted={true}
            loop={true}
            playsInline={true}
            autoPlay={true}
            src={vid1}
            className="vid-nft"
          ></video>
          <video
            muted={true}
            loop={true}
            playsInline={true}
            autoPlay={true}
            src={vid2}
            className="vid-nft"
          ></video>
          <video
            muted={true}
            loop={true}
            playsInline={true}
            autoPlay={true}
            src={vid3}
            className="vid-nft"
          ></video>
          <video
            muted={true}
            loop={true}
            playsInline={true}
            autoPlay={true}
            src={vid4}
            className="vid-nft"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Nft;
