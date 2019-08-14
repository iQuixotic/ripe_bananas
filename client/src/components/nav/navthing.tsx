import React from "react";
import logo from "./logo.png";
import Searchbar from "./searchbar";
import "react-fa";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {IState } from "../../redux/reducers";
import Login from "../Modals/Login";
import Signup from "../Modals/Signup";

export interface ILoginProps {
}

/**
 * This component renders the navbar for the website.
 * Menu features will change dependant on if a user is
 * logged in or not. Contains the website name, logo and
 * a menu with the searchbar, movie list and fluctuating options,
 * signup, login, profile and logout.
 */
class NavComponent extends React.Component<ILoginProps> {
  public render() {
    return (
      <div className="navigation">
        {/* Navbar expands when large, collapses when md or smaller */}
        <nav
          className="navbar nav-img navbar-toggleable-md 
                navbar-expand-md navbar-dark bg-dark display-front nav-pad d-flex"
        >
          {/* for the header. includes title and logo */}
          <div className="align-items-end row blue-bg display-inline">
            <div className="navbar-header display-inline" id="title">
              Ripe Bananas
            </div>
            <img className="logo display-inline" src={logo} alt="Bananas" />
          </div>

          {/* button for menu on mobile */}
          <button
            className="navbar-toggler"
            id="rb-btn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* menu for the navbar */}
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto margin-nav">
              <li className="nav-item">
                <Searchbar />
              </li>
              <li className="p5px">
                <Link className="btn" id="rb-btn" to="/home">
                  Home
                </Link>
              </li>
              <li className="p5px">
                <Link className="btn" id="rb-btn" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="p5px">
                <button
                  className="btn"
                  id="rb-btn"
                  data-toggle="modal"
                  data-target="#signup-modal"
                >
                  signup
                </button>
              </li>
              <li className="p5px">
                <button
                  className="btn"
                  id="rb-btn"
                  data-toggle="modal"
                  data-target="#login-modal"
                >
                  login
                </button>
              </li>
              {/* <li className="p5px"><button className="btn" id="rb-btn">Logout</button></li> */}
            </ul>
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
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);
