import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../Firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from './Header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to="/shop">
        Shop
      </OptionsLink>
      <OptionsLink to="/contact">
        Contact
      </OptionsLink>
      {currentUser ? (
        <OptionsLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionsLink>
      ) : (
        <OptionsLink to="/signin">
          Sign In
        </OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// Map State to Props
// createStructuredSelector will automatically pass our toplevel state to the selectors.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// Connect to Redux
export default connect(mapStateToProps)(Header);