import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { RightSidebar } from "./components";
import { HikerLevel, HikingGear, MapTraining, Footer, Home } from "./container";

const App = () => {
  const section1 = useRef(0);
  const section2 = useRef(0);
  const section3 = useRef(0);

  return (
    <div>
      <Home />
      <RightSidebar
        section1={section1}
        section2={section2}
        section3={section3}
      />
      <HikerLevel forwardedRef={section1} />
      <HikingGear forwardedRef={section2} />
      <MapTraining forwardedRef={section3} />
      <Footer />
    </div>
  );
};

export default App;
