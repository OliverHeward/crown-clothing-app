import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from '../../redux/cart/selectors';

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
        {/* map through each Cart Items from global state and render them in the dropdown */}
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
