import * as React from "react";
import { connect } from "react-redux";
import { IUserState, IState } from "../../redux/reducers";
import {
  userPasswordUpdate,
  userPasswordConfirm,
  userValidPassword
} from "../../redux/actions/users.actions";
import "./style.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export interface IUserProps {
  user: IUserState;

  // action porperties
  userPasswordUpdate: (password: string) => void;
  userConfirmPassword: (password: string) => void;
  userValidPassword: (validPassword: boolean) => void;
}

/**
 * This is the component for the User modal
 *
 * contains all state update methods needed
 * as well as axios post function
 */
class Password extends React.Component<IUserProps> {
  /**
   * updates the password in state
   * @param e input from password input
   */
  handleUserPasswordUpdate(e: any) {
    const value = e.target.value;
    this.props.userPasswordUpdate(value);
  }

  /**
   * updates the confirm password in state
   * @param e input from confirm input
   */
  handleUserConfirmPassword(e: any) {
    const value = e.target.value;
    this.props.userConfirmPassword(value);
    this.validatePassword(value);
  }

  validatePassword(password: string) {
    if (password === this.props.user.userPassword && password !== "") {
      this.props.userValidPassword(false);
    } else this.props.userValidPassword(true);
  }

  /**
   * Contains the axios call to update
   * user to the DB
   */
  updatePassword() {
    console.log(this.props.user.userPassword);
    console.log(this.props.user.userConfirmPassword);
    this.props.userValidPassword(true);
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
                    className="form-control form-field"
                    type="password"
                    onChange={e => this.handleUserPasswordUpdate(e)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group col-6 form control">
                  <label>
                    <strong>Confirm Password</strong>
                  </label>
                  <input
                    className={
                      this.props.user.validPassword
                        ? "form-red form-control"
                        : "form-green form-control"
                    }
                    type="password"
                    onChange={e => this.handleUserConfirmPassword(e)}
                    placeholder="Verify Password"
                    required
                  />
                </div>
              </div>
              <div
                className="pass-mess"
                hidden={!this.props.user.validPassword}
              >
                Passwords must match
              </div>
              
              <div
                className="pass-mess-2"
                hidden={this.props.user.validPassword}
              >
                Passwords match!
              </div>
            </form>
            <button
              type="submit"
              data-dismiss="modal"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.updatePassword()}
              disabled={this.props.user.validPassword}
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
  user: state.user
});

const mapDispatchToProps = {
  userPasswordUpdate: userPasswordUpdate,
  userConfirmPassword: userPasswordConfirm,
  userValidPassword: userValidPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Password);
