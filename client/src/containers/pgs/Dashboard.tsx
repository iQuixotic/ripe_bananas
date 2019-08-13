import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import { SECRET } from '../../api';
import { IState, IPageState } from '../../redux/reducers';
import { dashboardMessageReq } from '../../redux/actions/pages.actions';
// import Carousel  from '../../components/carousel/carousel'
import SearchResult from '../../components/result/SearchResult';
import MovieInfo from '../../components/review/movieInfo';

export interface IPageProps {
    message: IPageState;

    // Action properties from the dispatcher
    dashboardMessageReq: () => void;
    // fourOfourMessageReq: () => void;
    // landingMessageReq: () => void;
    // multiReviewMessageReq: () => void;
    // singleReviewMessageReq: () => void;
}

export class DashboardPg extends React.Component<IPageProps> {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1 display-inline"></div> 
                        <MovieInfo />                   
                        <SearchResult />
                        <SearchResult />
                        <SearchResult />
                        <SearchResult />                        
                        <SearchResult />
                </div>
                {/* {this.props.message.message}
                Dashboard
                <Carousel /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPg);