import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.components";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../Components/with-spinner/with-spinner.components";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionOverviewContainer from "../../Components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../Pages/collection/collection.container";

// const CollectionOverviewwithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   isFetchingCollection: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionLoading,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
