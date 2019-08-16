import * as React from "react";
import NoPoster from "./NoPoster.jpg";
import "./style.css";
import { IState, IMovieState } from "../../redux/reducers";
import { connect } from "react-redux";
import Signup from "../Modals/Signup";
import Login from "../Modals/Login";
import Review from "../Modals/Review";
import { OMDB } from "../../api";
import {
  movieSearchResolved
} from "../../redux/actions/movie.actions";

export interface IMovieInfoProps {
  movie: IMovieState;
  name: string;
  year: string;

  movieSearchResolved: (
    name: string,
    plot: string,
    year: string,
    posterUrl: string
    ) => void;
  }
  
  class MovieInfo extends React.Component<IMovieInfoProps> {
    
    // componentDidMount = () => {
    //   this.getMovie();
    // }

  getPoster(): string {
    if (this.props.movie.posterUrl === "N/A") {
      return NoPoster;
    }
    return this.props.movie.posterUrl;
  }

  getMovie() {
    console.log(this.props.name);
    OMDB.getSingleMovie(this.props.name, this.props.year).then(payload => {
      const name = payload.data.Title;
      const plot = payload.data.Plot;
      const year = payload.data.Year;
      const posterUrl = payload.data.Poster;
      this.props.movieSearchResolved(name, plot, year, posterUrl);
    });
  }

  public render() {
    this.getMovie();
    return (
      <div className="movie-info">
        <div className="row">
          <div className="col-1 display-inline" />
          <div className="poster col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 display-inline">
            <img src={this.getPoster()} alt="poster" className="r-image" />
          </div>
          <div className="info col-10 col-sm-10 col-md-7 col-lg-7 col-xl-7 display-inline">
            <h1 className="col-12">
              {this.props.movie.name}
              {` (${this.props.movie.year})`}
            </h1>
            <hr />
            <h3 className="col-12">Plot:</h3>
            <p className="col-12">{this.props.movie.plot}</p>
            <div className="row col-12">
              <h3 className="display-inline col-3">Rating: </h3>
            </div>
            <p className="col-12">4.5 stars</p>

            <button
              className="btn float-right"
              id="rb-btn"
              data-toggle="modal"
              data-target="#review-modal"
            >
              Review
            </button>
          </div>
          <div className="col-1 display-inline" />
        </div>

        {/* After this point are all the modals needed to interface with the review button */}

        {/* review modal */}
        <div
          className="modal fade login"
          id="review-modal"
          role="dialog"
          aria-labelledby="reviewModal"
          aria-hidden="true"
        >
          <Review />
        </div>

        {/* signup modal */}
        <div
          className="modal fade login"
          id="signup-modal"
          role="dialog"
          aria-labelledby="signupModal"
          aria-hidden="true"
        >
          <Signup />
        </div>

        {/* login modal */}
        <div
          className="modal fade login"
          id="login-modal"
          role="dialog"
          aria-labelledby="loginModal"
          aria-hidden="true"
        >
          <Login />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieInfo);
