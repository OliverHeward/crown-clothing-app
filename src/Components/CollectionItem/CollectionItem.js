import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import { addItem } from "../../redux/cart/actions";

import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  // destructor properties from item
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // dispatch addItem function and pass item to it
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
