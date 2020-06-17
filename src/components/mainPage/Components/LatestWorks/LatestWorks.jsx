import React from "react";
import stl from "../../MainPage.module.css";
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
    <div className={stl.latestWorks + " " + stl.wrapper}>
      <div
        className={
          stl.titleLines + " " + stl.titleLines1 + " " + stl.titleWrapper
        }
      >
        <hr className={stl.line} />
        <div className={stl.title}>
          <h2 className={stl.title3}>Latest works</h2>
        </div>
        <hr className={stl.line} />
      </div>
      <div className={stl.workCards}> {/* owl theme */}
        {works}
      </div>

      <div className={stl.buttonPage}>
        <a href="Portfolio.html">
          <button>View more projects</button>
        </a>
      </div>
    </div>
  );
};

export default LatestWorks;
