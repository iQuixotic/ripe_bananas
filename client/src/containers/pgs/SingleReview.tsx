import React from "react";
import { connect } from "react-redux";
import { IState, IReviewState } from "../../redux/reducers";
import MovieInfo from "../../components/review/movieInfo";
import Line from "../../components/review/line";
import { ReviewCard } from "../../components";
import './style.css';
import { singleReviewMessageReq } from "../../redux/actions/pages.actions";
import { singleReviewIsOpen } from "../../redux/actions/dbReviews.actions";


export interface IReviewProps {
  reviews: IReviewState;
  singleReviewMessageReq: () => void;
  singleReivewIsOpen: (bool: boolean) => void;
}

let isOpen = true;
export class SingleReviewPg extends React.Component<IReviewProps> {
  render() {
    return (
      <div className="pg-bg">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2 display-inline" />
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 display-inline">
            <MovieInfo />
            <Line />
            {/* <ResultsList /> */}
            {/* used to produce all the individual review components */}
            {/* use Results and SearchResult for reference */}
            <ReviewCard
              className="movie-info"
              openClose={() => this.props.singleReivewIsOpen(this.props.reviews.isOpen)}
              reviewOpen={this.props.reviews.isOpen}
              rating={this.props.reviews.rating}
              review={this.props.reviews.body}
              fn={this.props.reviews.firstName}
              ln={this.props.reviews.lastName}
              title={this.props.reviews.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  reviews: state.reviews
});

const mapDispatchToProps = {
  singleReivewIsOpen: singleReviewIsOpen,
  singleReviewMessageReq: singleReviewMessageReq
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleReviewPg);

