import React from "react";

import "./cart-dropdown.styles.scss";
import CartItem from "../Cart-item/cart-item.components";
import { selectCartItems } from "../../redux/Cart/cart.selector";
import { connect } from "react-redux";

import CustomButton from "../Custom-button/custom-button.components";

const CartDropdown = ({ cartItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItem: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
