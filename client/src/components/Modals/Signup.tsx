import * as React from "react";
import { connect } from "react-redux";
import { ILoginState, IState } from "../../redux/reducers";
import {
  signupPasswordUpdate,
  signupEmailUpdate,
  signupConfirmPassword,
  signupFirstnameUpdate,
  signupLastnameUpdate
} from "../../redux/actions/loginsignup.actions";

export interface ISignupProps {
  login: ILoginState;

  // action porperties
  signupEmailUpdate: (email: string) => void;
  signupPasswordUpdate: (password: string) => void;
  signupConfirmPassword: (password: string) => void;
  signupFirstnameUpdate: (fn: string) => void;
  signupLastnameUpdate: (ln: string) => void;
}

/**
 * This is the component for the signup modal
 *
 * contains all state update methods needed
 * as well as axios post function
 */
class Signup extends React.Component<ISignupProps> {
  /**
   * updates the email in state
   * @param e input from email input
   */
  handleSignupEmailUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupEmailUpdate(value);
  }

  /**
   * updates the password in state
   * @param e input from password input
   */
  handleSignupPasswordUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupPasswordUpdate(value);
  }

  /**
   * updates the confirm password in state
   * @param e input from confirm input
   */
  handleSignupConfirmPassword(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupConfirmPassword(value);
  }

  /**
   * updates the firstname in state
   * @param e input from firstname input
   */
  handleSignupFirstnameUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupFirstnameUpdate(value);
  }

  /**
   * updates the lastname in state
   * @param e input from lastname input
   */
  handleSignupLastnameUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupLastnameUpdate(value);
  }

  /**
   * Contains the axios call to post new
   * user to the DB
   */
  signupUser() {
    console.log(this.props.login.firstname);
    console.log(this.props.login.lastname);
    console.log(this.props.login.signupEmail);
    console.log(this.props.login.signupPassword);
    console.log(this.props.login.confirmPassword);
  }

  public render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              SIGNUP
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
              <div className="form-row">
                <div className="form-group col-6">
                  <label>
                    <strong>First Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => this.handleSignupFirstnameUpdate(e)}
                  />
                </div>
                <div className="form-group col-6">
                  <label>
                    <strong>Last Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => this.handleSignupLastnameUpdate(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={e => this.handleSignupEmailUpdate(e)}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-6">
                  <label>
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => this.handleSignupPasswordUpdate(e)}
                  />
                </div>
                <div className="form-group col-6">
                  <label>
                    <strong>Confirm Password</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => this.handleSignupConfirmPassword(e)}
                  />
                </div>
              </div>
            </form>
            <button
              type="button"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.signupUser()}
            >
              Signup
            </button>
          </div>
          {/* modal footer */}
          <div className="modal-footer">
            {"Already have an account? "}
            <button
              className="signup btn"
              data-dismiss="modal"
              id="rb-btn"
              data-toggle="modal"
              data-target="#login-modal"
            >
              {" "}
              login here
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  login: state.login
});

const mapDispatchToProps = {
  signupEmailUpdate: signupEmailUpdate,
  signupPasswordUpdate: signupPasswordUpdate,
  signupConfirmPassword: signupConfirmPassword,
  signupFirstnameUpdate: signupFirstnameUpdate,
  signupLastnameUpdate: signupLastnameUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
