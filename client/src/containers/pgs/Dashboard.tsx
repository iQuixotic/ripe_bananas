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

export class DashboardPg extends React.Component<IPageProps> {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 display-inline"></div>
                    <div className="col-8 col-sm-8 col-md-5 col-lg-2 display-inline">
                        <Carousel />
                    </div>
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