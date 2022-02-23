import React from "react";
// Assets
import bg from "../../assets/roadmap.jpg";
import pointer from "../../assets/gif-phone.gif";
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <h1 className="yellow_text" data-aos="fade-down">
        Roadmap To HOPE
      </h1>
      <div className="roadmap-image">
        <img
          data-aos-delay="200"
          data-aos="fade-down"
          className="roadmap-bg"
          src={bg}
          alt="..."
        />
        <div
          data-aos-delay="300"
          data-aos="fade-down"
          className="pointer-div pointer-div1"
        >
          <div className="left-pointer">
            <p>EPOH 1.0</p>
            <img
              data-aos="zoom-in"
              data-aos-delay="350"
              src={pointer}
              alt="..."
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>February 2022</h4>
            <ul class="a">
              <li>
                <p>Educate people about the project and create awareness </p>
              </li>
              <li>
                <p>
                  Gather a group of dedicated community members that share the
                  same passion and goals
                </p>
              </li>
              <li>
                <p>Allocate whitelist spots</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos-delay="400"
          data-aos="fade-down"
          className="pointer-div pointer-div2"
        >
          <div className="left-pointer">
            <p className="big">EPOH 2.0</p>
            <img
              data-aos="zoom-in"
              data-aos-delay="450"
              src={pointer}
              alt="..."
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>March 2022 </h4>
            <ul class="a">
              <li>
                <p>Marketing Launch</p>
              </li>
              <li>
                <p>Keep educating about the Bed & Breakfast marketplace</p>
              </li>
              <li>
                <p>Pre-sale & Public Sale</p>
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos-delay="400"
          data-aos="fade-down"
          className="pointer-div pointer-div2"
        >
          <div className="left-pointer">
            <p className="big">EPOH 3.0</p>
            <img
              data-aos="zoom-in"
              data-aos-delay="450"
              src={pointer}
              alt="..."
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>March 2022 and Beyond</h4>
            <ul class="a">
              <li>
                <p>Reveal Party on Twitter Spaces</p>
              </li>
              <li className="blue-gradient">
                <h6>
                  A group of 10 ELC holders (and their +1’s) will receive a
                  weekend getaway with Mansion, Yacht and Private Jet
                  experiences in Beverly Hills
                </h6>
              </li>
              <li>
                <p>Finalize the course in all formats to send to holders</p>
              </li>
              <li>
                <p>
                  Settle and launch 10 units in the first building (Downtown
                  Austin, TX)
                </p>
              </li>
              <li>
                <p>Weekly Live B&B Mentorship for ELC holders</p>
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos-delay="400"
          data-aos="fade-down"
          className="pointer-div pointer-div2"
        >
          <div className="left-pointer">
            <p className="big">EPOH 4.0</p>
            <img
              data-aos="zoom-in"
              data-aos-delay="450"
              src={pointer}
              alt="..."
              className="pointer-img"
            />
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
  );
}

export default Roadmap;
