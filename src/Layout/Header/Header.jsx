import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [closeNav, setCloseNav] = useState(true);

  useEffect(() => {
    const mobile = window.innerWidth;
    if (mobile > 966) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else {
          setShow(false);
          setOpenNav(false);
          setOpen(false);
        }
      });
    } else {
      return;
    }

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="" />
      </div>
      <div className={`right-header ${show ? "display-none" : ""}`}>
        <a href="#" className="nav-link">
          Project.
        </a>
        <a href="#" className="nav-link">
          About.
        </a>
        <a href="#" className="nav-link">
          Contact.
        </a>
        <a href="#" className="nav-link">
          XR Division.
        </a>
      </div>
      <div className={`open-nav ${show ? "display" : ""}`}>
        <button
          className={`burger ${open ? "active" : ""}`}
          onClick={() => {
            setOpen((prev) => !prev);
            setOpenNav((prev) => !prev);
            setCloseNav((prev) => !prev);
          }}
        ></button>
        <div
          className={`nav-menu-side ${
            openNav ? "display opened-nav" : "delay"
          }`}
        >
          <div className="nav-div first-nav">
            <a
              href="#"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              Case Studies
            </a>
            <div
              className={`sub-anchor ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              <a href="#" className="sub-link">
                MUSEUMS & CULTURE
              </a>
              <a href="#" className="sub-link">
                ENTERTAINMENT
              </a>
              <a href="#" className="sub-link">
                BRANDS & CONTENT
              </a>
              <a href="#" className="sub-link">
                ARCHIVES
              </a>
            </div>
          </div>
          <div className="nav-div">
            <a
              href="#"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              About
            </a>
          </div>
          <div className="nav-div">
            <a
              href="#"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              Contact
            </a>
          </div>
          <div className="nav-div">
            <a
              href="#"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              XR Division
            </a>
          </div>
          <div
            className={`social-div ${openNav ? "animation" : ""} ${
              closeNav ? "delay-tag" : ""
            }`}
          >
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faVimeo} />
          </div>
          <div
            className={`language-div ${openNav ? "animation" : ""} ${
              closeNav ? "delay-tag" : ""
            }`}
          >
            <p className="fr">FR</p>
            <p className="eng">ENG</p>
          </div>
          <p
            className={`copyright ${openNav ? "animation" : ""} ${
              closeNav ? "delay-tag" : ""
            }`}
          >
            All rights reserved Femme Fatale Studio 2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
