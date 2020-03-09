import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { signOutStart } from '../../redux/user/actions';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from './Header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
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
        <OptionsLink as="div" onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

// Connect to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);