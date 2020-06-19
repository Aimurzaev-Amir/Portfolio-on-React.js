import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css";
import BlockTitleText from "../../../../common/BlockTitle";
import PhotoCard from "./PhotoCard";
import first from "../../img/photos/1.jpg";
import second from "../../img/photos/2.jpg";
import third from "../../img/photos/3.jpg";
import fourth from "../../img/photos/4.jpg";
import fifth from "../../img/photos/5.jpg";
import sixth from "../../img/photos/6.jpg";

let AboutMePhotos = () => {
  return (
    <div class="glanceCover wrapper">
      <BlockTitleText titleClass={"titleLines titleLines2"} blockTitleText={"A Glance At Me"} />
      <div class="glanceCards">
        <div class="photos">
          <PhotoCard
            onPhotoClickAction={"changeSlideIndex(0)"}
            imgDescr={"I love ocean!"}
            img={first}
          />
          <PhotoCard
            onPhotoClickAction={"changeSlideIndex(1)"}
            imgDescr={"my friend"}
            img={second}
          />
          <PhotoCard
            onPhotoClickAction={"changeSlideIndex(2)"}
            imgDescr={"me, my self and i"}
            img={third}
          />
          <PhotoCard onPhotoClickAction={"changeSlideIndex(3)"} imgDescr={"my love"} img={fourth} />
          <PhotoCard
            onPhotoClickAction={"changeSlideIndex(4)"}
            imgDescr={"again ocean"}
            img={fifth}
          />
          <PhotoCard
            onPhotoClickAction={"changeSlideIndex(5)"}
            imgDescr={"like a model"}
            img={sixth}
          />
          
          {/* Modal Gallery options */}
          <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img
              id="nextPhoto"
              class="nextPhoto galleryButton"
              src="./img/about-me-page/photos/next.png"
              alt=""
            />
            <img
              id="prevPhoto"
              class="prevPhoto galleryButton"
              src="./img/about-me-page/photos/prev.png"
              alt=""
            />
            <img class="modalContent" id="img01" alt="" />
            <div id="caption"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePhotos;
