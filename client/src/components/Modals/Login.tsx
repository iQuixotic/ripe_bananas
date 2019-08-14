import * as React from "react";
import { connect } from "react-redux";
import { ILoginState, IState } from "../../redux/reducers";
import {
  loginEmailUpdate,
  loginPasswordUpdate,
  signupPasswordUpdate,
  signupEmailUpdate,
  signupConfirmPassword,
  signupFirstnameUpdate,
  signupLastnameUpdate
} from "../../redux/actions/loginsignup.actions";

export interface ILoginProps {
  login: ILoginState;

  // action porperties
  loginEmailUpdate: (email: string) => void;
  loginPasswordUpdate: (password: string) => void;
  signupEmailUpdate: (email: string) => void;
  signupPasswordUpdate: (password: string) => void;
  signupConfirmPassword: (password: string) => void;
  signupFirstnameUpdate: (fn: string) => void;
  signupLastnameUpdate: (ln: string) => void;
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
    // const url = "http://localhost:8080/login"
    // Axios({
    //   method: "post",
    //   url: url,
    //   data: {
    //     email: this.props.loginEmailUpdate,
    //     password: this.props.loginPasswordUpdate
    //   }
    // });
    //-------then catch block to be added in later---------
    //   .then(res => {
    //     window.localStorage.setItem('token', res.data.token);
    //     this.props.history.push("/home");
    //     return res.data;
    //   })
    //   .catch(err => {
    //     this.setState({
    //       ...this.state,
    //       badLogin: true
    //     });
    //     console.log(err);
    //   });
    //--------------------------------------------------------
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
  loginPasswordUpdate: loginPasswordUpdate,
  signupEmailUpdate: signupEmailUpdate,
  signupPasswordUpdate: signupPasswordUpdate,
  signupConfirmPassword: signupConfirmPassword,
  signupFirstnameUpdate: signupFirstnameUpdate,
  signupLastnameUpdate: signupLastnameUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
