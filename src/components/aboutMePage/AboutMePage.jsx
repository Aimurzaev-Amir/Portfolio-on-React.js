import React from "react";
import AboutMePageBanner from "./aboutMeComponents/AboutMePageBanner";
import AboutMeIntro from "./aboutMeComponents/AboutMeIntro";
import AboutMeSkills from "./aboutMeComponents/AboutMeSkills/AboutMeSkills";
import AboutMeEducation from "./aboutMeComponents/AboutMeEducation/AboutMeEducation";
import AboutMeFacts from "./aboutMeComponents/AboutMeFacts";
import AboutMePhotos from "./aboutMeComponents/AboutMePhotos/AboutMePhotos";

let AboutMePage = () => {
  return (
    <div class="bgBlue">
      <AboutMePageBanner /> 
      <AboutMeIntro /> 
      <AboutMeSkills />
      <AboutMeEducation />
      <AboutMeFacts />
      <AboutMePhotos />
    </div>
  ); 
};

export default AboutMePage;
