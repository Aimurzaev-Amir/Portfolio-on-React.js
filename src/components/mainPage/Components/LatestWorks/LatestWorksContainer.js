import React from "react";
import LatestWorks from "./LatestWorks";
import { connect } from "react-redux";
import { addWork } from "../../../../Redux/WorksReducer";

let LatestWorksContainer = (props) => {
  return <LatestWorks works={props.works} />;
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
  };
};

export default connect(mapStateToProps, { addWork })(LatestWorksContainer);
