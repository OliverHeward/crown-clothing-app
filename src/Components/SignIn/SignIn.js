import React from "react";
import { connect } from "react-redux";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { googleSignInStart, emailSignInStart } from "../../redux/user/actions";

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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;
    // Dynamically take in input name and assign value to state
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
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
            <Button type="submit" value="Submit Form">
              Sign In
            </Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
