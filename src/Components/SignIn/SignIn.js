import React from "react";

import Input from '../Input/Input';
import Button from '../Button/Button';

import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <Button type="submit" value="Submit Form">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
