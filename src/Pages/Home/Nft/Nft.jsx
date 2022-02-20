import React from "react";
import "./Nft.css";
import vid from "../../../Assets/vid.mp4";
function Nft() {
  return (
    <div className="nft">
      <h1 className="nft-h1">OUR NFT's</h1>{" "}
      <video
        muted={true}
        loop={true}
        playsInline={true}
        autoPlay={true}
        src={vid}
        className="vid"
      ></video>
    </div>
  );
}

export default Nft;
