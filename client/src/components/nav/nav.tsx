import * as React from "react";
import logo from "./logo.png";
import Searchbar from "./searchbar";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/users.actions";
import { IState, IUserState, ILoginState } from "../../redux/reducers";
import "./style.css";
import Login from "../Modals/Login";
import Signup from "../Modals/Signup";
import { loggedIn } from "../../redux/actions/loginsignup.actions";

export interface INavProps {
  user: IUserState;
  login: ILoginState;

  logoutUser: () => void;
  loggedIn: (loggedIn: boolean) => void;
}

class NavNew extends React.Component<INavProps> {

  logoutUser() {
    this.props.logoutUser();
    this.logInOut();
    window.location.href = '/';
  }

  logInOut() {
    this.props.loggedIn(!this.props.login.isLoggedIn);
  }

  public render() {
    return (
      <div className="navigation">
        <nav className="navbar nav-img">
          <div className="navbar-header row brand header-adj">
            <div className="navbar-header display-inline" id="title">
              Ripe Bananas
            </div>
            <img className="logo display-inline ban-adj" src={logo} alt="Bananas" />
          </div>
          <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 search-bar">
            <Searchbar />
          </div>
          <div className="navbar-right">
            <div className="dropdown menu-btn">
              <button className="dropbtn btn menu-height" id="rb-btn">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  pointer-events="none"
                  size="lg"
                />
              </button>
              <div className="dropdown-content">
                <Link className="btn btn-block dropcontent" to="/">
                  Home
                </Link>
                {this.props.login.isLoggedIn ? (
                  <div>
                    <Link className="btn btn-block dropcontent" to="/profile">
                      Profile
                    </Link>
                    <button
                    className="btn btn-block dropcontent"
                    onClick={() => this.logoutUser()}
                  >
                    Logout
                  </button>
                </div>): null 
                }

              {!this.props.login.isLoggedIn ? (
                <div>
                  <button
                    className="btn btn-block dropcontent"
                    data-toggle="modal"
                    data-target="#signup-modal"
                  >
                    Signup
                  </button>
                  <button
                    className="btn btn-block dropcontent"
                    data-toggle="modal"
                    data-target="#login-modal"
                  >
                  Login
                  </button>
                </div>): null
              }
                {/* <button
                  className="btn btn-block dropcontent"
                  onClick={() => this.logoutUser()}
                >
                  Logout
                </button> */}
              </div>
            </div>
          </div>
        </nav>

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
  user: state.user,
  login: state.login
});

const mapDispatchToProps = {
  logoutUser: logoutUser,
  loggedIn: loggedIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavNew);
