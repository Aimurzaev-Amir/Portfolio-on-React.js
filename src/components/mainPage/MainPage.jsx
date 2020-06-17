import React from "react";
import Introduction from "./Components/Introduction";
import stl from "./MainPage.module.css";
import SkillsList from "./Components/SkillsList";
import LatestWorksContainer from "./Components/LatestWorks/LatestWorksContainer";

let MainPage = () => {
  return (
    <div className={stl.bgBlue}>
      <Introduction />
      <SkillsList />
      <LatestWorksContainer />
      
    </div>
  );
};

export default MainPage;
