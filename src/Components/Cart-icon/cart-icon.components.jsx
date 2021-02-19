import React from "react";
import { connect } from "react-redux";
import ToggleCartHidden from "../../redux/Cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import { selectCartItemsCount } from "../../redux/Cart/cart.selector";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
