import * as React from "react";
import NoPoster from "./NoPoster.jpg";
import "./style.css";
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
import { connect } from "react-redux";

export interface IMovieInfoProps {
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

class MovieInfo extends React.Component<IMovieInfoProps> {
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

  handleSignupEmailUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupEmailUpdate(value);
  }

  handleSignupPasswordUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupPasswordUpdate(value);
  }

  handleSignupConfirmPassword(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupConfirmPassword(value);
  }

  handleSignupFirstnameUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupFirstnameUpdate(value);
  }

  handleSignupLastnameUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.signupLastnameUpdate(value);
  }

  signupUser() {
    console.log(this.props.login.firstname);
    console.log(this.props.login.lastname);
    console.log(this.props.login.signupEmail);
    console.log(this.props.login.signupPassword);
    console.log(this.props.login.confirmPassword);
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
      <div className="movie-info">
        <div className="row">
          <div className="col-1 display-inline" />
          <div className="poster col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 display-inline">
            <img src={NoPoster} alt="poster" className="w-100 c-image" />
          </div>
          <div className="info col-10 col-sm-10 col-md-7 col-lg-7 col-xl-7 display-inline">
            <h1 className="col-12">Title</h1>
            <h3 className="col-12">Plot:</h3>
            <p className="col-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              voluptate vero ex, doloremque quis quae harum enim id adipisci
              similique modi, perferendis cupiditate eaque non, ut cum? Minima,
              quae cum!
            </p>
            <div className="row col-12">
              <h3 className="display-inline col-3">Rating: </h3>
            </div>
            <p className="col-12">4.5 stars</p>

            <button
              className="btn float-right"
              id="rb-btn"
              data-toggle="modal"
              data-target="#review-modal"
            >
              Review
            </button>
          </div>
          <div className="col-1 display-inline" />
        </div>

        {/* After this point are all the modals needed to interface with the review button */}

        {/* review modal */}
        <div
          className="modal fade login"
          id="review-modal"
          role="dialog"
          aria-labelledby="reviewModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  REVIEW
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
                      <strong>Review</strong>
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <strong>Rating</strong>
                    </label>
                    <div className="form-row">
                      {/* 1 star */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label className="form-check-label">1</label>
                      </div>
                      {/* 2 star */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option2"
                        />
                        <label className="form-check-label">2</label>
                      </div>
                      {/* 3 star */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option3"
                        />
                        <label className="form-check-label">3</label>
                      </div>
                      {/* 4 star */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option4"
                        />
                        <label className="form-check-label">4</label>
                      </div>
                      {/* 5 star */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option5"
                        />
                        <label className="form-check-label">5</label>
                      </div>
                    </div>
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-block"
                  id="rb-btn"
                  onClick={() => this.loginUser()}
                >
                  Post Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* signup modal */}
        <div
          className="modal fade login"
          id="signup-modal"
          role="dialog"
          aria-labelledby="signupModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
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
        </div>

        {/* login modal */}
        <div
          className="modal fade login"
          id="login-modal"
          role="dialog"
          aria-labelledby="loginModal"
          aria-hidden="true"
        >
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
)(MovieInfo);
