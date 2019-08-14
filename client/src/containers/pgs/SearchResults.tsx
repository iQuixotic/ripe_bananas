import React from "react";
import { connect } from "react-redux";
// import axios from 'axios';
// import { SECRET } from '../../api';
import { IState, IPageState } from "../../redux/reducers";
import { dashboardMessageReq } from "../../redux/actions/pages.actions";
import Results from "../../components/result/Results";

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
      <div className="pg-bg">
        <div className="row search-results">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 display-inline result-margin" />
          <div className="listed-results display-inline col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
            <Results />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  message: state.page
});

const mapDispatchToProps = {
  dashboardMessageReq: dashboardMessageReq
  // movieSearchResolved: movieSearchResolved,
  // userSubmitRequest: userSubmitRequest,
  // inputUpdate: inputUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
