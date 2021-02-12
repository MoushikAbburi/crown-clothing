import React from "react";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../src/Pages/Shop/shop.components";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.components";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import Header from "../src/Components/Header/Header.components";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
