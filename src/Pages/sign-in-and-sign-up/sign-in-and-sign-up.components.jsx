import React from "react";
import SignIn from "../../Components/sign-in/sign-in.components";
import SignUp from "../../Components/Sign-up/sign-up.components";
import signUp from "../../Components/Sign-up/sign-up.components";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
