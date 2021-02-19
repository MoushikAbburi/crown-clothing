import React from "react";

import "./cart-dropdown.styles.scss";
import CartItem from "../Cart-item/cart-item.components";
import { selectCartItems } from "../../redux/Cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../Custom-button/custom-button.components";
import ToggleCartHidden from "../../redux/Cart/cart.actions";

const CartDropdown = ({ cartItem, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.length ? (
        cartItem.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(ToggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
