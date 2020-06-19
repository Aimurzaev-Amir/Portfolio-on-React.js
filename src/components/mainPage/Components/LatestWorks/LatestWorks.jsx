import React from "react";
import "../../MainPage.css";
import "../../../Media.css";
import WorkPreview from "./WorkPreview";
import BlockTitleText from "../../../../common/BlockTitle";
import Button from "../../../../common/Button";

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
      <BlockTitleText titleClass={"titleLines titleLines1"} blockTitleText={"Latest works"} />
      <div class="workCards">{works}</div>
      <Button btnUrl={"Portfolio.html"} btnText={"View more projects"} />
    </div>
  );
};

export default LatestWorks;
