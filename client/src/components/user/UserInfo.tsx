import * as React from "react";
import { IState, IMovieState } from "../../redux/reducers";
import { connect } from "react-redux";
import Password from "../Modals/Password";

export interface IMovieInfoProps {
  movie: IMovieState;
}

class MovieInfo extends React.Component<IMovieInfoProps> {

  public render() {
    return (
      <div className="movie-info">
        <div className="row">
          <div className="col-1 display-inline" />
          <div className="info col-10 col-sm-10 col-md-7 col-lg-7 col-xl-7 display-inline">
            <h1 className="col-12">
                Firstname Lastname
              {/* {`${this.props.user.firstname} ${this.props.user.lastname}`} */}
            </h1>
            <hr />
            <h3 className="col-12">Email:</h3>
            <p className="col-12">
                email@email.com
            {/* {this.props.user.email} */}
            </p>
            <div className="row col-12">
              <h4 className="display-inline col-12">Number of ratings:</h4>
            </div>
            <p className="col-12">
                (10)
            {/* {`(${this.props.user.numReviews})`} */}
            </p>

            <button
              className="btn"
              id="rb-btn"
              data-toggle="modal"
              data-target="#password-modal"
            >
              password change
            </button>
          </div>
          <div className="col-1 display-inline" />
        </div>

        {/* After this point are all the modals needed to interface with the review button */}

        {/* password modal */}
        <div
          className="modal fade login"
          id="password-modal"
          role="dialog"
          aria-labelledby="passwordModal"
          aria-hidden="true"
        >
          <Password />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  movie: state.movie
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieInfo);
