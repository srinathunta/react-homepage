import React from "react";
import { Header } from "../components";
import { BsArrowDown } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="app__home__container">
      <Header />
      <div className="app__home__wrapper">
        <div className="follow-us">
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
        <div className="app__home__content">
          <div className="sub-head">
            <hr />
            <p>A Hiking guide</p>
          </div>
          <div className="home__heading">
            <h1>
              Be prepared for the <br /> Mountains and beyond!
            </h1>
          </div>
          <div className="scroll-down">
            <p>
              scroll down <BsArrowDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
