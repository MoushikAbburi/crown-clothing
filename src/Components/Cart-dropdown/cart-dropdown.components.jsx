import React from "react";

import "./cart-dropdown.styles.scss";

import CustomButton from "../Custom-button/custom-button.components";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
