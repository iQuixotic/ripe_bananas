import * as React from "react";
import { connect } from "react-redux";
import { IState, IReviewState } from "../../redux/reducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import {
  reviewRatingUpdate,
  reviewTitleUpdate,
  reviewBodyUpdate
} from "../../redux/actions/dbReviews.actions";

export interface IReviewProps {
  reviews: IReviewState;

  reviewRatingUpdate: (reviewRating: string) => void;
  reviewTitleUpdate: (reviewTitle: string) => void;
  reviewBodyUpdate: (reviewBody: string) => void;
}

/**
 * Contains the body for the review modal
 *
 * Has the function that contains axios post call
 * to post a new review
 */
class Review extends React.Component<IReviewProps> {
  updateRating(e: any) {
    const value = e.target.value;
    console.log(e.target.value);
    this.props.reviewRatingUpdate(value);
    // console.log(this.props.reviews.rating);
  }

  updateTitle(e: any) {
    const value = e.target.value;
    console.log(e.target.value);
    this.props.reviewTitleUpdate(value);
    // console.log(this.props.reviews.rating);
  }

  /**
   * allows user to search by using enter
   */
  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      this.createReview();
    }
  };

  updateBody(e: any) {
    const value = e.target.value;
    console.log(e.target.value);
    this.props.reviewBodyUpdate(value);
    // console.log(this.props.reviews.rating);
  }
  /**
   * post the review to the DB
   */
  createReview() {
    //post review
  }

  public render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* modal header */}
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
          {/* modal body */}
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>
                  <strong>Title</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => this.updateTitle(e)}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Review</strong>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  onChange={e => this.updateBody(e)}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Rating</strong>
                </label>
                <div className="form-row">
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <button
                      type="button"
                      className="btn star"
                      value="1"
                      onClick={e => this.updateRating(e)}
                    >
                      <FontAwesomeIcon icon={faStar} pointer-events="none" />
                    </button>
                    <button
                      type="button"
                      className="btn star"
                      value="2"
                      onClick={e => this.updateRating(e)}
                    >
                      <FontAwesomeIcon icon={faStar} pointer-events="none" />
                    </button>
                    <button
                      type="button"
                      className="btn star"
                      value="3"
                      onClick={e => this.updateRating(e)}
                    >
                      <FontAwesomeIcon icon={faStar} pointer-events="none" />
                    </button>
                    <button
                      type="button"
                      className="btn star"
                      value="4"
                      onClick={e => this.updateRating(e)}
                    >
                      <FontAwesomeIcon icon={faStar} pointer-events="none" />
                    </button>
                    <button
                      type="button"
                      className="btn star"
                      value="5"
                      onClick={e => this.updateRating(e)}
                    >
                      <FontAwesomeIcon icon={faStar} pointer-events="none" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* submit button */}
            <button
              type="button"
              data-dismiss="modal"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.createReview()}
              onKeyPress={this.handleKeyPress}
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  reviews: state.reviews
});

const mapDispatchToProps = {
  reviewRatingUpdate: reviewRatingUpdate,
  reviewTitleUpdate: reviewTitleUpdate,
  reviewBodyUpdate: reviewBodyUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
