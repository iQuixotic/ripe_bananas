import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import { SECRET } from '../../api';
import { IState, IPageState } from '../../redux/reducers';
import { dashboardMessageReq } from '../../redux/actions/pages.actions';

export interface IPageProps {
    message: IPageState;

    // Action properties from the dispatcher
    dashboardMessageReq: () => void;
    // fourOfourMessageReq: () => void;
    // landingMessageReq: () => void;
    // multiReviewMessageReq: () => void;
    // singleReviewMessageReq: () => void;
}

export class SearchResults extends React.Component<IPageProps> {

    render() {
        return (
            <div className="search-wrapper">

                <div className="results-wrapper col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1 display-inline">
                    idv result page
                    //results from OMDB
                    // component that creates search result components
                    // based on number returned from the search
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    message: state.page
});

const mapDispatchToProps = {
        dashboardMessageReq:  dashboardMessageReq
    // movieSearchResolved: movieSearchResolved,
    // userSubmitRequest: userSubmitRequest,
    // inputUpdate: inputUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);