import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "../src/Pages/Shop/shop.components";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.components";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import CheckOutPage from "./Pages/Checkout/checkout.components";

import Header from "../src/Components/Header/Header.components";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
