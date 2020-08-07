import React from "react";
import adminPanelImg from "../../Redux/img/adminPanel/adminPanel.png";
import "./Admin.css";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { setAuthData } from "../../Redux/AdminReducer";
import { Redirect } from "react-router-dom";

let AdminMenu = (props) => {
  const onSubmit = (formData) => {
    props.setAuthData(formData);
  };
  return (
    <div>
      {props.validation ? ( <Redirect to={"/portfolio"} /> ) : (
      <div className="wrapper signIn">
        <img src={adminPanelImg} alt="aimurzaev.com" />
        <h1>Sign in to AdminPanel</h1>
        <LoginForm onSubmit={onSubmit} />
      </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    validation: state.admin.validation,
  };
};

export default connect(mapStateToProps, { setAuthData })(AdminMenu);
