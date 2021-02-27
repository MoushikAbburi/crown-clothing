import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.components";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.components";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionMap);
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
