import React from "react";
import stl from "./Header.module.css";
import Typical from "react-typical";

let MainBanner = () => {
  return (
    <div className={stl.aboutMeMain + " " + stl.wrapper}>
      <div className={stl.aboutMeMainText}>
        <h1>I'm aimurzayev amir, an front-end Developer & UI/UX Designer.</h1>
        <Typical
          steps={[
            "I code cool websites",
            1000,
            "Just call me maybe",
            1000,
            "I love Tesla",
            500,
            "I like everything space related",
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
        <span id="typed"></span>
      </div>
      <div className={stl.scrollIndicator} id="scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MainBanner;
