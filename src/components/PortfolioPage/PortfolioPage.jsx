import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./PortfolioPage.css";
import { NavLink } from "react-router-dom";

let PortfolioPage = (props) => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  };

  let Works = props.works.map((work) => {
    return (
      <div className="work">
        <div className="workInfo">
          <h1>{work.workName}</h1>
          <h2>{work.whatIDid}</h2>
          <div className="buttonPage leftSideButton">
            <NavLink to={work.urlAdress} className="navItemLink">
              <button>View project</button>
            </NavLink>
          </div>
        </div>
        <div className="workImg">
          <img src={work.workPhoto} alt="" />
        </div>
      </div>
    );
  });

  return (
    <div className="bgWhite">
      <div className="portfolio wrapper">
        <div className="titleLines titleLines1">
          <hr className="line" />
          <div className="title">
            <h2>projects</h2>
          </div>
          <hr className="line" />
        </div>
        <p>
          Below you will find my previous works along with some projects which I have just taken on.
          Each project has a description, design approaches taken and technologies used.
        </p>
      </div>
      <Swiper {...params}>{Works}</Swiper>
    </div>
  );
};

export default PortfolioPage;
