import * as React from "react";
import { connect } from "react-redux";
import { IState, IMovieState } from "../../redux/reducers";

export interface IReviewProps {
  movie: IMovieState;
}

/**
 * Contains the body for the review modal
 *
 * Has the function that contains axios post call
 * to post a new review
 */
class Review extends React.Component<IReviewProps> {
  /**
   * post the review to the DB
   */
  reviewMovie() {
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
                <input type="text" className="form-control" />
              </div>
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
                      value={1}
                    />
                    <label className="form-check-label">1</label>
                  </div>
                  {/* 2 star */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value={2}
                    />
                    <label className="form-check-label">2</label>
                  </div>
                  {/* 3 star */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value={3}
                    />
                    <label className="form-check-label">3</label>
                  </div>
                  {/* 4 star */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio4"
                      value={4}
                    />
                    <label className="form-check-label">4</label>
                  </div>
                  {/* 5 star */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio5"
                      value={5}
                    />
                    <label className="form-check-label">5</label>
                  </div>
                </div>
              </div>
            </form>
            {/* submit button */}
            <button
              type="button"
              className="btn btn-block"
              id="rb-btn"
              onClick={() => this.reviewMovie()}
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
  movie: state.movie
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
