import React from "react";
import PortfolioPage from "./PortfolioPage";
import { connect } from "react-redux";

let PortfolioPageContainer = (props) => {
    return(
        <PortfolioPage works = {props.works} />
    )
}

let mapStateToProps = (state) => {
    return{
        works: state.works.Works,
    }
}

export default connect(mapStateToProps, {})(PortfolioPageContainer)