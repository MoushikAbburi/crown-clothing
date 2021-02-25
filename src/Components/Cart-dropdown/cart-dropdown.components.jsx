import React from "react";

import CartItem from "../Cart-item/cart-item.components";
import { selectCartItems } from "../../redux/Cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import ToggleCartHidden from "../../redux/Cart/cart.actions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  Button,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItem, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItem.length ? (
        cartItem.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(ToggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
