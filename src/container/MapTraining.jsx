import React, { useEffect, useRef } from "react";
import { img03 } from "../assets";
import { MainContent, MainImage } from "../components";

const MapTraining = (props) => {
  return (
    <div
      ref={props.forwardedRef}
      id="maptraining"
      className="app__container full__height"
    >
      <MainContent
        order="03"
        subheading="where you go is the key"
        heading="Understand Your Map & Timing"
        content="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        readmoreurl="#"
      />
      <MainImage image={img03} order="odd" />
    </div>
  );
};

export default MapTraining;
