import * as React from "react";
import { connect } from "react-redux";
import { IUserState, IState } from "../../redux/reducers";
import {
  userFirstnameUpdate,
  userLastnameUpdate
} from "../../redux/actions/users.actions";
import "./style.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export interface IUserProps {
  user: IUserState;

  // action porperties
  userFirstnameUpdate: (fn: string) => void;
  userLastnameUpdate: (ln: string) => void;
}

/**
 * This is the component for the User modal
 *
 * contains all state update methods needed
 * as well as axios post function
 */
class Name extends React.Component<IUserProps> {
  /**
   * updates the fn in state
   * @param e input from fn input
   */
  handleUserFirstnameUpdate(e: any) {
    const value = e.target.value;
    this.props.userFirstnameUpdate(value);
  }

  /**
   * updates the ln in state
   * @param e input from ln input
   */
  handleUserLastnameUpdate(e: any) {
    const value = e.target.value;
    this.props.userLastnameUpdate(value);
  }

  /**
   * allows user to search by using enter
   */
  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      this.updateName();
    }
  };

  /**
   * Contains the axios call to post new
   * user info to the DB
   */
  updateName() {
    console.log(this.props.user.userPassword);
    console.log(this.props.user.userConfirmPassword);
  }

  public render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              Change name
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
                    <strong>Firstname</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={e => this.handleUserFirstnameUpdate(e)}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="form-group col-6 form control">
                  <label>
                    <strong>Lastname</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={e => this.handleUserLastnameUpdate(e)}
                    placeholder="Doe"
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              data-dismiss="modal"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.updateName()}
              onKeyPress={this.handleKeyPress}
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
  userFirstnameUpdate: userFirstnameUpdate,
  userLastnameUpdate: userLastnameUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
