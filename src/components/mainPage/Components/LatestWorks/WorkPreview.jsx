import React from "react";
import stl from "../../MainPage.module.css";

let WorkPreview = (props) => {
  return (
    <div className={stl.workCard}>
      <div className={stl.cardInfoOverlay}>
        <div className={stl.cardHeader}>
          <div className={stl.elipses}>
            <div className={stl.elipse}></div>
            <div className={stl.elipse}></div>
            <div className={stl.elipse}></div>
          </div>
          <div className={stl.toggleCard}>
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        <div className={stl.cardBody}>
          <img
            src={props.Preview}
            alt={props.previewDescription}
          />
        </div>
        <div className={stl.workCardInfo}>
          <p>{props.smallDescription}</p>
          <h3>{props.Name}</h3>
          <div className={stl.buttonPage + " " + stl.workCardButton}>
            <a href={props.urlAdress}>
              <button>View projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPreview;
