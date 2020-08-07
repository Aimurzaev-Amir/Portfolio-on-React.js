import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="signInForm">
      <p>Username</p>
      <Field placeholder="Login" name="login" component="input" />
      <p>Password</p>
      <Field placeholder="Password" name="password" component="input" />
      <button>Sign in</button>
    </form>
  );
};

const SignInReduxForm = reduxForm({ form: "signIn" })(LoginForm);

export default SignInReduxForm;
