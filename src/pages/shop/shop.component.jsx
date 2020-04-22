import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Utilise our HOC WithSpinner to create the enhanced components
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {

        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
        /*
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        */ 
        // Observer Pattern Data Fetching
        // Dynamically updates as changes on the database occur
        /* this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        }); */

        // Promise-based Pattern Data Fetching
        // This will limit the data fetching to this single point in time
        // One-off API call
        /* collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        }); */

        // Promise-based II Pattern Data Fetching (with fetch() function)
        // The conversion of the object received would be different
        /* fetch('https://firestore.googleapis.com/v1/projects/sexygenarias-db/databases/(default)/documents')
        .then(response => response.json())
        .then(collections => console.log(collections)); */
    }
    
    render() {
        const { match } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);