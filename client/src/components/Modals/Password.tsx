import * as React from "react";
import { connect } from "react-redux";
import { ILoginState, IState } from "../../redux/reducers";
import {
  signupPasswordUpdate,
  signupConfirmPassword
} from "../../redux/actions/loginsignup.actions";

export interface ISignupProps {
  login: ILoginState;

  // action porperties
  signupPasswordUpdate: (password: string) => void;
  signupConfirmPassword: (password: string) => void;
}

/**
 * This is the component for the signup modal
 *
 * contains all state update methods needed
 * as well as axios post function
 */
class Password extends React.Component<ISignupProps> {
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
   * Contains the axios call to post new
   * user to the DB
   */
  updatePassword() {
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
              Change password
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
              onClick={() => this.updatePassword()}
            >
              Update
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
  signupPasswordUpdate: signupPasswordUpdate,
  signupConfirmPassword: signupConfirmPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Password);
