import React from "react";
import "./mainContent.css";
import { BsArrowRight } from "react-icons/bs";

const MainContent = (props) => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="floating-number">
          <p>{props.order}</p>
        </div>
        <div className="sub-head">
          <hr />
          <p>{props.subheading}</p>
        </div>
        <div className="head-text">
          <p>{props.heading}</p>
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="read-button">
          <a href={props.readmoreurl} className="">
            read more
          </a>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
