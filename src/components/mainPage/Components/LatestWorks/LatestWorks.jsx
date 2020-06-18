import React from "react";
import "../../MainPage.css";
import "../../../Media.css"
import WorkPreview from "./WorkPreview";

let LatestWorks = (props) => {
  let works = props.works.map((work) => {
    return (
      <WorkPreview
        key={work.id}
        id={work.id}
        Name={work.workName}
        Preview={work.workPreview}
        smallDescription={work.smallDescription}
        previewDescription={work.previewDescription}
        urlAdress={work.urlAdress}
      />
    );
  });

  return (
    <div class="latestWorks wrapper">
      <div class="titleLines titleLines1 titleWrapper">
        <hr class="line" />
        <div class="title">
          <h2>Latest works</h2>
        </div>
        <hr class="line" />
      </div>
      <div class="workCards">
        {works}
      </div>

      <div class="buttonPage">
        <a href="Portfolio.html">
          <button>View more projects</button>
        </a>
      </div>
    </div>
  );
};

export default LatestWorks;
