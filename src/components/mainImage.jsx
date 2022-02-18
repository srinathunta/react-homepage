import React from "react";
import img2 from "../assets/02.jpg";
import "./mainImage.css";

const MainImage = (props) => {
  return (
    <div className={`main-image ${props.order}`}>
      <img src={props.image} className="" />
    </div>
  );
};

export default MainImage;
