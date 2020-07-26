import React from "react";
import PortfolioPage from "./PortfolioPage";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import KazTransGas from "./PortfolioPageWorks/KazTransGas";
import { setWorkId } from "../../Redux/WorksReducer";

let PortfolioPageContainer = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Route
          exact
          path="/portfolio"
          component={() => <PortfolioPage works={props.works} setWorkId={props.setWorkId} />}
        />
        <Route
          exact
          path={props.works[props.currentWorkId].urlAdress}
          component={() => <KazTransGas works={props.works[props.currentWorkId]} currentWorkId={props.currentWorkId} />}
        />
      </BrowserRouter>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.Works,
    currentWorkId: state.works.currentWorkId,
  };
};

export default connect(mapStateToProps, { setWorkId })(PortfolioPageContainer);
