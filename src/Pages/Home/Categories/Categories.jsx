import React, { useState } from "react";
import "./Categories.css";
import img1 from "../../../Assets/1.jpeg";
import img2 from "../../../Assets/2.jpeg";
import img3 from "../../../Assets/3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Categories() {
  const [pop, showPop] = useState(false);
  const [pop2, showPop2] = useState(false);
  const [pop3, showPop3] = useState(false);
  return (
    <div className="category">
      <div className="category-box">
        <div className="img-category">
          <img src={img1} alt="" />
        </div>
        <div className="desc-category">
          <h1>What is ELC?</h1>
          <p className="desc-cate">
            EPOH is the world’s first members-only private bed and breakfast
            (B&B) club where membership is purchased on the blockchain as a
            Non-Fungible-Token (NFT) and owned by the token-holder.
          </p>
          <div onClick={() => showPop(true)} className="scroll-div-category">
            <p>Click to find more:</p>
            <div className="arrow-div-cate">
              <div className="arrow-outer">
                {" "}
                <div className="arrow-cate"></div>
              </div>

              <div className="circle-cate"></div>
            </div>
          </div>
        </div>
        <div className={`overlay2 ${pop ? "flex" : ""}`}></div>
        <div className={`pop ${pop ? "flex" : ""}`}>
          <FontAwesomeIcon icon={faXmark} onClick={() => showPop(false)} />
          <h1>What is ELC?</h1>
          <div className="para">
            <h2>More Info</h2>
            <p>
              EPOH is combining real estate, NFTs, and business investment in a
              never-before-seen way. With the magic of Web3, we are creating an
              all-inclusive investment opportunity in the form of an NFT project
              with unique utility. Holders of an ELC token are entitled to a
              share of the profits from a functioning real-world AirBnB
              business, have access to exclusive club-owned high-end properties
              to stay in, and join a community of people who are focused on
              improving their lives and the lives of those around them.
            </p>
          </div>
        </div>
      </div>
      <div className="category-box2">
        <div className="img-category">
          <img src={img2} alt="" />
        </div>
        <div className="desc-category">
          <h1>Why ELC?</h1>
          <p className="desc-cate">
            Our members are not only buying 3D digital Art with the potential
            for appreciation, but also making a diversified investment with
            real-life value. There’s a real-world business backing the ELC which
            provides the potential for profit sharing. There are beautiful
            physical B&Bs for members to stay in. And finally, we provide
            educational resources that could very well change your life!!
          </p>
          <div onClick={() => showPop2(true)} className="scroll-div-category">
            <p>Click to find more:</p>
            <div className="arrow-div-cate">
              <div className="arrow-outer">
                {" "}
                <div className="arrow-cate"></div>
              </div>

              <div className="circle-cate"></div>
            </div>
          </div>
        </div>
        <div className={`overlay ${pop2 ? "flex" : ""}`}></div>
        <div className={`pop ${pop2 ? "flex" : ""}`}>
          <FontAwesomeIcon icon={faXmark} onClick={() => showPop2(false)} />
          <h1>Why ELC?</h1>
          <div className="para">
            <h2>Timeshare</h2>
            <p>
              ELC members will have access to our B&B properties, which will be
              located across Texas, with the majority centered in Austin City
              (listings in different states coming soon). We are focused on
              creating the highest level of Bed and Breakfast (B&B) experiences
              for our NFT holders in these units.
            </p>
          </div>
          <div className="para">
            <h2>“Shareholder” in current B&B business</h2>
            <p>
              Simply holding an ELC NFT can function as a way for investors to
              earn passive income by receiving a share of the business.
            </p>
          </div>
          <div className="para">
            <h2>Growth Focused Community</h2>
            <p>
              This is not just a timeshare or a profit share: we’re building a
              community of positive, driven people who want to become
              financially free. To grow that community, we’re providing
              education on how you can build your own business based on our
              proven model. ELC members will get full access to our knowledge
              that we’ve built over a decade in the domain, including
              information on how to:
            </p>
            <p>
              Get your foot in the door with B&B arbitrage with your first “yes”
              Furnish, renovate, and optimize dwelling for AirBnB and other
              platforms Book out your listing and achieve low vacancy rates How
              to use property management tools + best practices How to automate
              EVERYTHING When to use short term rentals and month-to-month
              rentals Ongoing mentorship and community
            </p>
          </div>
        </div>
      </div>
      <div className="category-box">
        <div className="img-category">
          <img src={img3} alt="" />
        </div>
        <div className="desc-category">
          <h1>ROADMAP TO HOPE</h1>
          <p className="desc-cate">Our roadmap to hope.</p>
          <div onClick={() => showPop3(true)} className="scroll-div-category">
            <p>Click Reveal Roadmap EPOH</p>
            <div className="arrow-div-cate">
              <div className="arrow-outer">
                {" "}
                <div className="arrow-cate"></div>
              </div>

              <div className="circle-cate"></div>
            </div>
          </div>
        </div>
        <div className={`overlay3 ${pop3 ? "flex" : ""}`}></div>
        <div className={`pop padding ${pop3 ? "flex" : ""}`}>
          <FontAwesomeIcon icon={faXmark} onClick={() => showPop3(false)} />
          <h1>ROADMAP TO HOPE</h1>
          <div className="para">
            <h2>EPOH 1.0- February 2022</h2>
            <p>
              Educate people on rental businesses on Twitter, Discord, and
              Telegram. Build our community of members with shared passions &
              goals! Whitelist Allocations!
            </p>
          </div>
          <div className="para">
            <h2>EPOH 2.0- March 20222</h2>
            <p>
              Pre-sale: March 7th <br /> Public Sale: March 8th <br /> Reveal:
              March 10th
            </p>
          </div>
          <div className="para">
            <h2>EPOH 3.0- March 2022 and Beyond</h2>
            <p>
              Start B&B Weekly Live course <br /> Settle and launch 10 units in
              the first building for ELC holders (Downtown Austin, TX) <br />{" "}
              Gift a weekend getaway with Mansion, Yacht and Private Jet
              experiences in Beverly Hills to a group of 10 ELC holders (and
              their +1’s). <br /> EPOH to HOPE <br /> End of Roadmap to HOPE{" "}
              <br /> Reveal Roadmap EPOH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
