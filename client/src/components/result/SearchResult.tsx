import * as React from "react";
import "./style.css";
import { connect } from "react-redux";
import { IState, IMovieState } from "../../redux/reducers";
import {
  movieSearchResolved,
//   userSubmitRequest,
//   inputUpdate,
  toReview
} from "../../redux/actions/movie.actions";
import { OMDB } from "../../api";
import NoPoster from "./NoPoster.jpg";
import { Redirect } from "react-router";

export interface ISearchResultProps {
  movie: IMovieState;
  
  // passed into component
  title: string;
  poster: string;
  year: string;

  // Action properties from the dispatcher
  movieSearchResolved: (name: string, plot: string, year: string, posterUrl: string) => void;
//   userSubmitRequest: () => void;
//   inputUpdate: (inputValue: string) => void;
  toReview: (toReview: boolean) => void;
}

class SearchResult extends React.Component<ISearchResultProps> {
  submit() {
    console.log(this.props.title);
    OMDB.getSingleMovie(this.props.title, this.props.year).then(payload => {
      const name = payload.data.Title;
      const plot = payload.data.Plot;
      const year = payload.data.Year;
      const posterUrl = payload.data.Poster;
      this.props.movieSearchResolved(name, plot, year, posterUrl);
      console.log("false: " + this.props.movie.toReview);
      this.goToReview();
      console.log("true: " + this.props.movie.toReview);
    });
    
  }

  getPoster(): string {
    if (this.props.poster === "N/A") {
      return NoPoster;
    }
    return this.props.poster;
  }

  goToReview() {
    this.props.toReview(!this.props.movie.toReview);
  }

  public render() {
    if (this.props.movie.toReview === true) {
        console.log("true: " + this.props.movie.toReview);
      this.goToReview();
      console.log("false: " + this.props.movie.toReview);
      return <Redirect to="/review" />;
    }

    return (
      <div className="result-wrapper">
        <div className="result-container row">
          <div className="col-2 display-inline" />
          <div className="poster-wrapper">
            <button className="signup poster-btn" onClick={() => this.submit()}>
              <img src={this.getPoster()} className="c-image" alt="Poster" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  movieSearchResolved: movieSearchResolved,
//   userSubmitRequest: userSubmitRequest,
//   inputUpdate: inputUpdate,
  toReview: toReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);
