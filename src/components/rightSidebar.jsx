import React, { useState, useEffect } from "react";
import "./rightSidebar.css";

const RightSidebar = (props) => {
  const [sec00, setSec00] = useState(true);
  const [sec01, setSec01] = useState(false);
  const [sec02, setSec02] = useState(false);
  const [sec03, setSec03] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY1 = props.section1.current.offsetTop;
      const scrollY2 = props.section2.current.offsetTop;
      const scrollY3 = props.section3.current.offsetTop;
      if (scrollY1 > window.scrollY > 0) {
        setSec00(true);
        setSec01(false);
        setSec02(false);
        setSec03(false);
      }
      if (window.scrollY > scrollY1) {
        setSec00(false);
        setSec01(true);
        setSec02(false);
        setSec03(false);
      }
      if (window.scrollY > scrollY2) {
        setSec00(false);
        setSec01(false);
        setSec02(true);
        setSec03(false);
      }
      if (window.scrollY > scrollY3) {
        setSec00(false);
        setSec01(false);
        setSec02(false);
        setSec03(true);
      }
    });
  }, []);
  return (
    <div className="right-sccrollbar">
      <div className={`home ${sec00 ? "on" : ""}`}>
        <a href="#home">Start</a>
      </div>
      <div className={`first ${sec01 ? "on" : ""}`}>
        <a href="#hikerlevel">01</a>
      </div>
      <div className={`second ${sec02 ? "on" : ""}`}>
        <a href="#hikergear">02</a>
      </div>
      <div className={`third ${sec03 ? "on" : ""}`}>
        <a href="#maptraining">03</a>
      </div>
    </div>
  );
};

export default RightSidebar;
