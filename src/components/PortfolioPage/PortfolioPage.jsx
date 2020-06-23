import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import img from "./img/work-bedentist/bedentist-work-logo.png";
import "./PortfolioPage.css";

let PortfolioPage = () => {
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
  return (
    <div>
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
      <Swiper {...params}>
        <div className="work">
          <div className="workInfo">
            <h1>KazTransGas</h1>
            <h2>
              UX <span>|</span> UI <span>|</span> <br />
              WEB DEVELOPMENT
            </h2>
            <div className="buttonPage leftSideButton">
              <a href="works/work-KazTransGas.html">
                <button>View project</button>
              </a>
            </div>
          </div>
          <div className="workImg">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="work">
          <div className="workInfo">
            <h1>KazTransGas</h1>
            <h2>
              UX <span>|</span> UI <span>|</span> <br />
              WEB DEVELOPMENT
            </h2>
            <div className="buttonPage leftSideButton">
              <a href="works/work-KazTransGas.html">
                <button>View project</button>
              </a>
            </div>
          </div>
          <div className="workImg">
            <img src={img} alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default PortfolioPage;
