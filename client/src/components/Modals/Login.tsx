import * as React from "react";
import { connect } from "react-redux";
import { ILoginState, IState, IUserState } from "../../redux/reducers";
import {
  loginEmailUpdate,
  loginPasswordUpdate,
  loggedIn
} from "../../redux/actions/loginsignup.actions";
import { userLogin } from "../../redux/actions/users.actions";
import { APIU } from '../../api';
import Axios from "axios";

export interface ILoginProps {
  login: ILoginState;
  user: IUserState;

  // action properties
  loginEmailUpdate: (email: string) => void;
  loggedIn: (loggedIn: boolean) => void;
  loginPasswordUpdate: (password: string) => void;
  userLogin: (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) => void;
}

/**
 * This is the component for the login modal
 *
 * contains all state update methods needed
 * as well as axios post function
 */
class Login extends React.Component<ILoginProps> {
  /**
   * updates the email in state
   * @param e input from email input
   */
  handleLoginEmailUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.loginEmailUpdate(value);
  }

  /**
   * Updates password in state
   * @param e input from password input
   */
  handleLoginPasswordUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.loginPasswordUpdate(value);
  }

  /**
   * allows user to search by using enter
   */
  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      this.loginUser();
    }
  };

  /**
   * Contains the axios call to the backend to log in a user using
   * the email and password they type in the login modal
   */
  loginUser() {
    const data = {
      email:this.props.login.loginEmail,
      password: this.props.login.loginPassword
    }

    APIU.login(data)
      .then(res => {
        if(res.status == 200 && res.data.token) {
          window.localStorage.setItem("token", res.data.token)
          this.getUserData();
       } else {
        //  set the state to retry
       }       
       this.logInOut();
      }
       )
      .catch(e => { throw e })
    //axios call to get userbyemail...

    //update current user
    // userLogin(this.payload.data.firstname, this.payload.data.lastname, this.payload.data.email, this.payload.data.password);
  }

  logInOut() {
    this.props.loggedIn(!this.props.login.isLoggedIn);
  }

  getUserData = () => {
    const email = this.props.login.loginEmail
    APIU.getAndSetUserByEmail(email)
      // .then(() => console.log("im getting called"))
      .then(res => {
        this.props.user.userEmail = res.data.email;
        this.props.user.userFirstname = res.data.firstname;
        this.props.user.userLastname = res.data.lastname;
      })
      .catch(e => { throw e })
  }

  public render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              LOGIN
            </h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {/* modal body */}
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>
                  <strong>Email address</strong>
                </label>
                <input
                  type="email"
                  placeholder="user_email@email.com"
                  className="form-control form-field"
                  onChange={e => this.handleLoginEmailUpdate(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-field"
                  onChange={e => this.handleLoginPasswordUpdate(e)}
                  required
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-block"
              id="rb-btn"
              data-dismiss="modal"
              onClick={() => this.loginUser()}
            >
              Login
            </button>
          </div>
          {/* modal footer */}
          <div className="modal-footer">
            Don't have an account?
            <button
              className="signup btn"
              id="mf-btn"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#signup-modal"
              onKeyPress={this.handleKeyPress}
            >
              {" "}
              Sign up here
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  login: state.login,
  user: state.user
});

const mapDispatchToProps = {
  loginEmailUpdate: loginEmailUpdate,
  loginPasswordUpdate: loginPasswordUpdate,
  loggedIn: loggedIn,
  userLogin: userLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
