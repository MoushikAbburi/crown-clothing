import React from "react";
import { connect } from "react-redux";
import ToggleCartHidden from "../../redux/Cart/cart.actions";

import { selectCartItemsCount } from "../../redux/Cart/cart.selector";
import { createStructuredSelector } from "reselect";

import {
  ShoppingIconContainer,
  CartIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={ToggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
