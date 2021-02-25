import React from "react";
import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey =
    "pk_test_51IOZRVEL49xWTYvnwr6sOVtDKfWDAUfb0mTtXEs0JQfAYuiUivgXrwrItt88wPyBHuMVTdN000M5jDHv5M81TUZm00AlkK5fGy";

  const onToken = (token) => {
    console.log(token);
    alert("Payment is Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shopping Company Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel="PayNow"
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};

export default StripeCheckoutButton;
