import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.components";

import CheckoutItem from "../../Components/Checkout-item/checkout-item.components";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/Cart/cart.selector";

import "./checkout.styles.scss";

const CheckOutPage = ({ cartItem, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItem.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
    <div className="test-card">
      *Please Use The Following card Details for payment*
      <br />
      4242 4242 4242 4242 Cvv:123 EXP: Any Futher date
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
  total: selectCartItemsTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
