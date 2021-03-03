import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../with-spinner/with-spinner.components";
import CollectionOverview from "./collection-overview.components";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
