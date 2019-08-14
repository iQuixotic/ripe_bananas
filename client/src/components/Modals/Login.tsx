import * as React from "react";
import { connect } from "react-redux";
import { ILoginState, IState } from "../../redux/reducers";
import {
  loginEmailUpdate,
  loginPasswordUpdate
} from "../../redux/actions/loginsignup.actions";

export interface ILoginProps {
  login: ILoginState;

  // action porperties
  loginEmailUpdate: (email: string) => void;
  loginPasswordUpdate: (password: string) => void;
}

class Login extends React.Component<ILoginProps> {
  handleLoginEmailUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.loginEmailUpdate(value);
  }

  handleLoginPasswordUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.loginPasswordUpdate(value);
  }

  /**
   * Contains the axios call to the backend to log in a user using
   * the email and password they type in the login modal
   * @param em email used to login user
   * @param pw password used to login a user
   */
  loginUser() {
    console.log(this.props.login);
    console.log(this.props.login.loginEmail);
    console.log(this.props.login.loginPassword);
  }

  public render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
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
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>
                  <strong>Email address</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => this.handleLoginEmailUpdate(e)}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={e => this.handleLoginPasswordUpdate(e)}
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.loginUser()}
            >
              Login
            </button>
          </div>
          <div className="modal-footer">
            Don't have an account?
            <button
              className="signup btn"
              id="rb-btn"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#signup-modal"
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
  login: state.login
});

const mapDispatchToProps = {
  loginEmailUpdate: loginEmailUpdate,
  loginPasswordUpdate: loginPasswordUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
