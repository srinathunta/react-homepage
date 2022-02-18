import React, { useEffect, useRef } from "react";
import { img01 } from "../assets";
import { MainContent, MainImage } from "../components";

const HikerLevel = (props) => {
  // const section = useRef(0);

  return (
    <div
      ref={props.forwardedRef}
      id="hikerlevel"
      className="app__container full__height"
    >
      <MainContent
        order="01"
        subheading="GEt Started"
        heading="What level of  hiker are you?"
        content="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        readmoreurl="#"
      />
      <MainImage image={img01} order="odd" />
    </div>
  );
};

export default HikerLevel;
