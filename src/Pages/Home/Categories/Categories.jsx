import React, { useState } from "react";
import "./Categories.css";
import img1 from "../../../Assets/1.jpeg";
import img2 from "../../../Assets/2.jpeg";
import img3 from "../../../Assets/3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Categories() {
  // all the popup opening states
  const [pop, showPop] = useState(false);
  const [pop2, showPop2] = useState(false);
  const [pop3, showPop3] = useState(false);
  return (
    <div className="category">
      <div id="what" className="category-box">
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
      <div id="why" className="category-box2">
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
      <div id="roadmap" className="category-box">
        <div className="img-category">
          <img src={img3} alt="" />
        </div>
        <div className="desc-category">
          <h1>ROADMAP TO HOPE</h1>
          <p style={{ width: "67%" }} className="desc-cate">
            Our roadmap to hope.
          </p>
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
        <div className={`pop padding ${pop3 ? "flex" : ""}`}>
          <FontAwesomeIcon icon={faXmark} onClick={() => showPop3(false)} />
          <div id="roadmap" className="roadmap2">
            <h1 className="yellow_text">Roadmap To HOPE</h1>
            <div className="roadmap-image">
              <div className="pointer-div">
                <div className="left-pointer">
                  <p>EPOH 1.0</p>
                </div>
                <div className="right-pointer">
                  <h4>February 2022</h4>
                  <ul class="a">
                    <li>
                      <p>
                        Educate people about the project and create awareness{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        Gather a group of dedicated community members that share
                        the same passion and goals
                      </p>
                    </li>
                    <li>
                      <p>Allocate whitelist spots</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pointer-div pointer-div2">
                <div className="left-pointer">
                  <p className="big">EPOH 2.0</p>
                </div>
                <div className="right-pointer">
                  <h4>March 2022 </h4>
                  <ul class="a">
                    <li>
                      <p>Marketing Launch</p>
                    </li>
                    <li>
                      <p>
                        Keep educating about the Bed & Breakfast marketplace
                      </p>
                    </li>
                    <li>
                      <p>Pre-sale & Public Sale</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pointer-div pointer-div2">
                <div className="left-pointer">
                  <p className="big">EPOH 3.0</p>
                </div>
                <div className="right-pointer">
                  <h4>March 2022 and Beyond</h4>
                  <ul class="a">
                    <li>
                      <p>Reveal Party on Twitter Spaces</p>
                    </li>
                    <li className="blue-gradient">
                      <h6>
                        A group of 10 ELC holders (and their +1’s) will receive
                        a weekend getaway with Mansion, Yacht and Private Jet
                        experiences in Beverly Hills
                      </h6>
                    </li>
                    <li>
                      <p>
                        Finalize the course in all formats to send to holders
                      </p>
                    </li>
                    <li>
                      <p>
                        Settle and launch 10 units in the first building
                        (Downtown Austin, TX)
                      </p>
                    </li>
                    <li>
                      <p>Weekly Live B&B Mentorship for ELC holders</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pointer-div pointer-div2">
                <div className="left-pointer">
                  <p className="big">EPOH 4.0</p>
                </div>
                <div className="right-pointer">
                  <h4>EPOH to HOPE</h4>
                  <ul class="a">
                    <li>
                      <p>End of Roadmap to HOPE</p>
                    </li>
                    <li>
                      <p>Reveal Roadmap EPOH</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
