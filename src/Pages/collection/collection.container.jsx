import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../Components/with-spinner/with-spinner.components";

import { selectIsCollectionLoading } from "../../redux/shop/shop.selector";
import CollectionPage from "../../Pages/collection/collection.components";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoading(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
