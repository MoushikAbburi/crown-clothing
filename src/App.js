import React from "react";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../src/Pages/Shop/shop.components";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
