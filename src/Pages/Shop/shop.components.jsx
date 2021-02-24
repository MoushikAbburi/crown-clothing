import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.components";
import { Route } from "react-router-dom";
import CollectionPage from "../../Components/collection/collection.components";

const ShopPage = ({ match }) => {
  console.log({ match });
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
