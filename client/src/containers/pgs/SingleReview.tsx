import React from "react";
import { connect } from "react-redux";
import { IState } from "../../redux/reducers";
import MovieInfo from "../../components/review/movieInfo";
import Line from "../../components/review/line";
import './style.css';

export interface IPageProps {}

export class SingleReviewPg extends React.Component<IPageProps> {
  render() {
    return (
      <div className="pg-bg">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2 display-inline" />
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 display-inline">
            <MovieInfo />
            <Line />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleReviewPg);
