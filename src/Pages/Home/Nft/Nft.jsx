import React from "react";
import "./Nft.css";
import vid1 from "../../../Assets/vid1.mp4";
import vid2 from "../../../Assets/vid2.mp4";
import vid3 from "../../../Assets/vid3.mp4";
import vid4 from "../../../Assets/vid4.mp4";
import poster from "../../../Assets/poster.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function Nft() {
  return (
    <div className="nft">
      <h1 className="nft-h1">OUR NFT's</h1>{" "}
      <div className="video-grid">
        <Splide
          options={{
            rewind: true,
            perPage: 1,
            pauseOnHover: false,
            resetProgress: false,
            height: "auto",
            loop: true,
            width: "100%",
            gap: "0rem",
            arrows: true,
            pagination: false,
            drag: true,
            perMove: 1,
          }}
          onMoved={(e, newIndex, prevIndex) => {
            const vids = document.querySelectorAll(".vid-nft");
            const videoPrev = vids[prevIndex];
            const videoNext = vids[newIndex];
            videoPrev.pause();
            videoNext.load();
            videoNext.play();
          }}
        >
          <SplideSlide>
            <div className="vid-div">
              <h1>Epoh Garden</h1>
              <video
                muted={true}
                loop={true}
                playsInline={true}
                autoPlay={true}
                controls={false}
                src={vid1}
                poster={poster}
                className="vid-nft 1"
              ></video>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="vid-div">
              <h1>Epoh Penthouse</h1>
              <video
                muted={false}
                loop={true}
                playsInline={true}
                autoPlay={false}
                controls={false}
                src={vid2}
                poster={poster}
                className="vid-nft 2"
              ></video>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="vid-div">
              <h1>Epoh Sahara</h1>
              <video
                muted={false}
                loop={true}
                playsInline={true}
                autoPlay={false}
                src={vid3}
                controls={false}
                poster={poster}
                className="vid-nft 3"
              ></video>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="vid-div">
              <h1>Epoh Space</h1>
              <video
                muted={false}
                loop={true}
                playsInline={true}
                autoPlay={false}
                controls={false}
                src={vid4}
                poster={poster}
                className="vid-nft 4"
              ></video>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Nft;
