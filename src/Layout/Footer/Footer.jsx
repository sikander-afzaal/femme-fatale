import React from "react";
import "./Footer.css";
import logo from "../../Assets/foot.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="col">
          <a href="#what" className="foot-links sub-foot">
            What is ELC?
          </a>
          <a href="#why" className="foot-links sub-foot">
            Why is ELC?
          </a>
          <a href="#roadmap" className="foot-links sub-foot">
            Roadmap to HOPE
          </a>
          <a href="..." className="foot-links sub-foot">
            Archives
          </a>
        </div>
        <div className="col">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/faq"
            className="foot-links"
          >
            FAQ
          </Link>
          <a href="..." className="foot-links">
            Contact
          </a>
          <a href="..." className="foot-links">
            XR Divison
          </a>
        </div>
        <Link onClick={() => window.scrollTo(0, 0)} to="/" className="col">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="footer-bottom">
        <div className="left-foot">
          <p className="legal">LEGALS</p>
          <p className="copy">All rights reserved EPOH Lounge Club 2021</p>
        </div>
        <div className="right-foot">
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
