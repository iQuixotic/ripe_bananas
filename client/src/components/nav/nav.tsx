import * as React from "react";
import logo from "./logo.png";
import Searchbar from "./searchbar";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/users.actions";
import { IState, IUserState } from "../../redux/reducers";
import './style.css';

export interface INavProps {
    user: IUserState;
  
    logoutUser: () => void;}

class NavNew extends React.Component<INavProps> {
  public render() {
    return (
      <div className="navigation">
        <nav className="navbar nav-img">
          <div className="navbar-header row brand">
            <div className="navbar-header display-inline" id="title">
              Ripe Bananas
            </div>
            <img className="logo display-inline" src={logo} alt="Bananas" />
          </div>
          <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
            <Searchbar />
          </div>
          <div className="navbar-right">
            <div className="dropdown">
              <button className="dropbtn btn pad-5" id="rb-btn">
                <FontAwesomeIcon icon={faEllipsisH} pointer-events="none" size="lg"/>
              </button>
              <div className="dropdown-content">
                <Link className="btn btn-block dropcontent" to="/">
                  Home
                </Link>
                <Link className="btn btn-block dropcontent" to="/profile">
                  Profile
                </Link>
                <button
                  className="btn btn-block dropcontent"
                  data-toggle="modal"
                  data-target="#signup-modal"
                >
                  signup
                </button>
                <button
                  className="btn btn-block dropcontent"
                  data-toggle="modal"
                  data-target="#login-modal"
                >
                  login
                </button>
                <button
                  className="btn btn-block dropcontent"
                  onClick={() => this.props.logoutUser()}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.user
});

const mapDispatchToProps = {
  logoutUser: logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavNew);
