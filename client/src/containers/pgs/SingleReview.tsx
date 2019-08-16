import React from "react";
import { connect } from "react-redux";
import { IState, IReviewState, IMovieState } from "../../redux/reducers";
import MovieInfo from "../../components/review/movieInfo";
import Line from "../../components/review/line";
import "./style.css";
import { singleReviewMessageReq } from "../../redux/actions/pages.actions";
import { singleReviewIsOpen } from "../../redux/actions/dbReviews.actions";
import Reviews from "../../components/review/Reviews";
import movieInfo from "../../components/review/movieInfo";

export interface IReviewProps {
  reviews: IReviewState;
  movie: IMovieState;

  // review actions
  singleReviewMessageReq: () => void;
  singleReivewIsOpen: (bool: boolean) => void;

  // movie actions
  movieInfo: (name: string, year: string) => void;
}

// let isOpen = true;
export class SingleReviewPg extends React.Component<any> {

  // componentDidMount = () => {
  //   const myProps: any = this.props;
  //   this.props.movieInfo(myProps.match.params.title, myProps.match.params.year);
  // };

  render() {
    return (
      <div className="pg-bg">
        <div className="row">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2 display-inline" />
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 display-inline">
            <MovieInfo
              name={this.props.movie.name}
              year={this.props.movie.year}
            />
            <Line />
            {/* <ResultsList /> */}
            {/* used to produce all the individual review components */}
            {/* use Results and SearchResult for reference */}
            {/* <ReviewCard
              className="movie-info"
              openClose={() => this.props.singleReivewIsOpen(this.props.reviews.isOpen)}
              reviewOpen={this.props.reviews.isOpen}
              rating={this.props.reviews.reviewRating}
              review={this.props.reviews.reviewBody}
              fn={this.props.reviews.reviewFirstname}
              ln={this.props.reviews.reviewLastname}
              title={this.props.reviews.reviewTitle}
            /> */}
            <Reviews />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  reviews: state.reviews,
  movie: state.movie
});

const mapDispatchToProps = {
  singleReivewIsOpen: singleReviewIsOpen,
  singleReviewMessageReq: singleReviewMessageReq,
  movieInfo: movieInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleReviewPg);
