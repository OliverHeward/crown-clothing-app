import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

// Map State to Props
// State = rootReducer
// 
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// Connect to Redux
export default connect(mapStateToProps)(Header);
