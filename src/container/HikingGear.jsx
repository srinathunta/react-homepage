import React, { useEffect, useRef } from "react";
import { img02 } from "../assets";
import { MainContent, MainImage } from "../components";

const HikingGear = (props) => {
  return (
    <div
      ref={props.forwardedRef}
      id="hikergear"
      className="app__container full__height"
    >
      <MainImage image={img02} order="even" />
      <MainContent
        order="02"
        subheading="Hiking Essentials"
        heading="Picking the right Hiking Gear!"
        content="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        readmoreurl="#"
      />
    </div>
  );
};

export default HikingGear;
