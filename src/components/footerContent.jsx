import React from "react";
import "./footerContent.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContent = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__left-content">
        <div className="footer__left__upper">
          <div className="footer__left__logo">MNTN</div>
          <div className="footer__left__desc">
            <p>
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
        </div>
        <div className="follow-us-footer">
          <p className="follow-text">Follow us</p>
          <p>
            <a href="#">
              <FaTwitter />
            </a>
          </p>
          <p>
            <a href="#">
              <FaInstagram />
            </a>
          </p>
        </div>
        <div className="footer__copyright">
          <p>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
        </div>
      </div>

      <div className="footer__right-content">
        <div className="footer__menu">
          <p className="footer__menu__head">More on The Blog</p>
          <ul className="footer__menu__list">
            <li>
              <a href="#">About MNTN</a>
            </li>
            <li>
              <a href="#">Contributors & Writers</a>
            </li>
            <li>
              <a href="#">Write For Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <p className="footer__menu__head">More on MNTN</p>
          <ul className="footer__menu__list">
            <li>
              <a href="#">The Team</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
