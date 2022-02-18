import React, { useEffect, useState } from "react";
import "./header.css";

import { MdOutlineAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 767) {
      setIsDesktop(false);
    }
  }, []);
  if (isDesktop) {
    return (
      <div className="home__header">
        <div className="home__header__wrapper">
          <div className="home__header__logo">
            <p>
              <a href="#">MNTN</a>
            </p>
          </div>
          <div className="home__header__menu">
            <ul>
              <li>
                <a href="#">Equipment</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="home__header__account">
            <MdOutlineAccountCircle />
            <p>
              <a href="#">Account</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="home__header">
      <div className="home__header__wrapper">
        <div className="menu__open__icon">
          <a
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <GiHamburgerMenu />
          </a>
        </div>
        <div
          className={`home__header__mobile__menu ${isMenuOpen ? "open" : ""}`}
        >
          <div className="menu-close">
            <a>
              <CgClose
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />
            </a>
          </div>
          <ul>
            <li>
              <a href="#">Equipment</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="home__header__logo">
          <p>
            <a href="#">MNTN</a>
          </p>
        </div>
        <div className="home__header__account">
          <MdOutlineAccountCircle />
          <p>
            <a href="#">Account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
