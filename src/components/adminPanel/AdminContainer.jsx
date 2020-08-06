import React from "react";
import AdminMenu from "./AdminMenu";
import { connect } from "react-redux";

let AdminContainer = (props) => {
    return(
        <AdminMenu onSubmit={""}/>
    )
}

let mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps, {})(AdminContainer);