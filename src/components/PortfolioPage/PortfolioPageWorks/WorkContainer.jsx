import React from "react";
import { connect } from "react-redux";
import Work from "./Work";

let WorkContainer = (props) => {
  return <Work works={props.works[props.currentWorkId]} currentWorkId={props.currentWorkId} />;
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
    currentWorkId: state.works.currentWorkId,
  };
};

export default connect(mapStateToProps, {})(WorkContainer);
