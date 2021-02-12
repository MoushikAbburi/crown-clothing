import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../Components/form-input/form-input.components";
import CustomButton from "../Custom-button/custom-button.components";
import { signInWithGoogle } from "../../Firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.prevenyDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            required
            name="email"
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            value={this.state.password}
            required
            name="password"
            handleChange={this.handleChange}
            label="password"
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
