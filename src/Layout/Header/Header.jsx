import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
  const [black, setBlack] = useState(false);

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
    <div className={`header ${show ? "white-color" : ""}`}>
      <Link
        onClick={() => {
          setBlack(false);
        }}
        to="/"
        className="left-header"
      >
        <img src={logo} alt="" />
      </Link>
      <div className={`right-header ${show ? "display-none" : ""}`}>
        <Link
          onClick={() => {
            setBlack(false);
          }}
          to="/"
          className={`nav-link ${black ? "black" : ""}`}
        >
          HOME.
        </Link>
        <Link
          onClick={() => {
            setBlack(true);
          }}
          to="/faq"
          className={`nav-link ${black ? "black" : ""}`}
        >
          FAQ.
        </Link>
        <Link
          onClick={() => {
            setBlack(false);
          }}
          to="/"
          className={`nav-link ${black ? "black" : ""}`}
        >
          Contact.
        </Link>
        <Link
          onClick={() => {
            setBlack(false);
          }}
          to="/"
          className={`nav-link ${black ? "black" : ""}`}
        >
          XR Division.
        </Link>
      </div>
      {/* //side bar -----------------------  */}
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
            <Link
              to="/"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
              onClick={() => {
                setOpen((prev) => !prev);
                setOpenNav((prev) => !prev);
                setCloseNav((prev) => !prev);
                setBlack(false);
              }}
            >
              Case Studies
            </Link>
            <div
              className={`sub-anchor ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              <a
                onClick={() => {
                  setOpen((prev) => !prev);
                  setOpenNav((prev) => !prev);
                  setCloseNav((prev) => !prev);
                  setBlack(false);
                }}
                href="/#what"
                className="sub-link"
              >
                What is ELC
              </a>
              <a
                onClick={() => {
                  setOpen((prev) => !prev);
                  setOpenNav((prev) => !prev);
                  setCloseNav((prev) => !prev);
                  setBlack(false);
                }}
                href="/#why"
                className="sub-link"
              >
                Why ELC
              </a>
              <a
                onClick={() => {
                  setOpen((prev) => !prev);
                  setOpenNav((prev) => !prev);
                  setCloseNav((prev) => !prev);
                  setBlack(false);
                }}
                href="/#roadmap"
                className="sub-link"
              >
                Roadmap to Hope
              </a>
              <Link
                onClick={() => {
                  setOpen((prev) => !prev);
                  setOpenNav((prev) => !prev);
                  setCloseNav((prev) => !prev);
                  setBlack(false);
                }}
                to="/"
                className="sub-link"
              >
                ARCHIVES
              </Link>
            </div>
          </div>
          <div className="nav-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setOpenNav((prev) => !prev);
                setCloseNav((prev) => !prev);
                setBlack(true);
              }}
              to="/faq"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              FAQ
            </Link>
          </div>
          <div className="nav-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setOpenNav((prev) => !prev);
                setCloseNav((prev) => !prev);
                setBlack(false);
              }}
              to="/"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="nav-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setOpenNav((prev) => !prev);
                setCloseNav((prev) => !prev);
                setBlack(false);
              }}
              to="/"
              className={`open-nav-tag ${openNav ? "animation" : ""} ${
                closeNav ? "delay-tag" : ""
              }`}
            >
              XR Division
            </Link>
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
