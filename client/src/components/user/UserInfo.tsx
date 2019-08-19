import * as React from "react";
import { IState, IUserState } from "../../redux/reducers";
import { connect } from "react-redux";
import Password from "../Modals/Password";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import Email from "../Modals/Email";
import Name from "../Modals/Name";

export interface IMovieInfoProps {
  user: IUserState;
}

class UserInfo extends React.Component<IMovieInfoProps> {
  public render() {
    return (
      <div className="movie-info">
        <div className="float-right">
          <div className="dropdown">
            <button className="dropbtn btn" id="rb-btn">
              <FontAwesomeIcon icon={faUserCog} pointer-events='none' size="lg"/>
            </button>
            <div className="dropdown-content">
              <button
                className="btn btn-block dropcontent"
                data-toggle="modal"
                data-target="#password-modal"
              >
                Change Password
              </button>
              <button
                className="btn btn-block dropcontent"
                data-toggle="modal"
                data-target="#email-modal"
              >
                Change Email
              </button>

              <button
                className="btn btn-block dropcontent"
                data-toggle="modal"
                data-target="#name-modal"
              >
                Change Name
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1 display-inline" />
          <div className="info col-10 col-sm-10 col-md-7 col-lg-7 col-xl-7 display-inline">
            <h1 className="col-12">
              {`${this.props.user.userFirstname} ${
                this.props.user.userLastname
              }`}
            </h1>
            <hr />
            <h3 className="col-12">Email:</h3>
            <p className="col-12">{this.props.user.userEmail}</p>
            <div className="row col-12">
              <h4 className="display-inline col-12">Number of ratings:</h4>
            </div>
            <p className="col-12">
              {/* {`(${this.props.user.userPassword})`} */}
              {/* {`(${this.props.user.numReviews})`} */}
            </p>
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

        {/* email modal */}
        <div
          className="modal fade login"
          id="email-modal"
          role="dialog"
          aria-labelledby="email"
          aria-hidden="true"
        >
          <Email />
        </div>

        {/* email modal */}
        <div
          className="modal fade login"
          id="name-modal"
          role="dialog"
          aria-labelledby="nameModal"
          aria-hidden="true"
        >
          <Name />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
