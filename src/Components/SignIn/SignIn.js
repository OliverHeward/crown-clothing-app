import React from "react";

import Input from '../Input/Input';
import Button from '../Button/Button';

import { auth, signInWithGoogle } from '../../Firebase/firebase.utils';

import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try { 
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    // Dynamically take in input name and assign value to state
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            label="Email"
            required
          />
          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            label="Password"
            required
          />
          <div className="buttons">
          <Button type="submit" value="Submit Form">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With 
          Google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
