import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import { SECRET } from '../../api';
import { IState, IPageState } from '../../redux/reducers';
import { dashboardMessageReq } from '../../redux/actions/pages.actions';
import Carousel  from '../../components/carousel/carousel'

export interface IPageProps {
    message: IPageState;

    // Action properties from the dispatcher
    dashboardMessageReq: () => void;
    // fourOfourMessageReq: () => void;
    // landingMessageReq: () => void;
    // multiReviewMessageReq: () => void;
    // singleReviewMessageReq: () => void;
}

export class LandingPg extends React.Component<IPageProps> {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.message.message}
                Landing page
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPg);