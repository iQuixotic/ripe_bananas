import * as React from "react";
import { connect } from "react-redux";
import { IUserState, IState } from "../../redux/reducers";
import { userEmailUpdate } from "../../redux/actions/users.actions";
import "./style.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export interface IUserProps {
  user: IUserState;

  // action porperties
  userEmailUpdate: (email: string) => void;
}

/**
 * This is the component for the User modal
 *
 * contains all state update methods needed
 * as well as axios post function
 */
class Email extends React.Component<IUserProps> {
  /**
   * updates the email in state
   * @param e input from email input
   */
  handleUserEmailUpdate(e: any) {
    console.log("input changing");
    const value = e.target.value;
    this.props.userEmailUpdate(value);
  }

  /**
   * allows user to search by using enter
   */
  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      this.updateEmail();
    }
  };

  /**
   * Contains the axios call to update
   * user info to the DB
   */
  updateEmail() {
    console.log(this.props.user.userEmail);
  }

  public render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              Change email
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
                <div className="form-group col-12">
                  <label>
                    <strong>Email</strong>
                  </label>
                  <input
                    className="form-control form-field"
                    type="email"
                    onChange={e => this.handleUserEmailUpdate(e)}
                    placeholder="user_email@email.com"
                    required
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              data-dismiss="modal"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.updateEmail()}
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
  userEmailUpdate: userEmailUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Email);
