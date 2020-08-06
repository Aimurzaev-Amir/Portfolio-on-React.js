import React from "react";
import { Field, reduxForm } from "redux-form";
import adminPanelImg from "../../Redux/img/adminPanel/adminPanel.png"
import "./Admin.css";

let AdminMenu = (props) => {
  return (
    <div className="wrapper signIn">
        <img src={adminPanelImg} alt="aimurzaev.com"/>
      <h1>Sign in to AdminPanel</h1>
      <form onSubmit={props.handleSubmit} className="signInForm">
        <p>Username</p>
        <Field placeholder="Login" name="login" component="input" />
        <p>Password</p>
        <Field placeholder="Password" name="password" component="input" />
        <button>Sign in</button>
      </form>
    </div>
  );
};

const SignInReduxForm = reduxForm({ form: "SignIn" })(AdminMenu);

export default SignInReduxForm;
