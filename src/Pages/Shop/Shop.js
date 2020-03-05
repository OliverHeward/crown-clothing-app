import React from "react";
import { Route } from "react-router-dom";

import { connect } from 'react-redux';

import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";

import WithSpinner from '../../Components/WithSpinner/WithSpinner';

import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/firebase.utils";

import { updateCollections } from '../../redux/shop/actions';

// Passes back a new component wrapped in our HOC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// Passes back a new component wrapped in our HOC WithSpinner
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  }
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    // create collection reference
    const collectionRef = firestore.collection('collections');

    // Promise styled fetch - one of API call
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({isLoading: false});
    });
  }
  
  componentWillUnmount() {

  }

  render() {
    // destruct match from props
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} /> } />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
