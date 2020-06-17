import React from "react";
import stl from "./Header.module.css";
import MainBanner from "./MainBanner";
import Navbar from "./Navbar";

let Header = (props) => {
  return (
    <header className={stl.aboutMePage}>
      <Navbar />
      <MainBanner />
    </header>
  );
};

export default Header;
