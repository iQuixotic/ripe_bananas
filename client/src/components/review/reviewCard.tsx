import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { IState, IReviewState } from "../../redux/reducers";
import { connect } from "react-redux";
import { singleReviewMessageReq } from "../../redux/actions/pages.actions";
import { singleReviewIsOpen } from "../../redux/actions/dbReviews.actions";

export interface IResultsProps {
    fn: String,
    ln: String,
    className: any,
    review: any,
    rating: any,
    title: String,

    // reviews: IReviewState;
    // singleReviewMessageReq: () => void;
    // singleReivewIsOpen: (bool: boolean) => void;
  }
  interface ITState {
      isOpen: Boolean
  }
  class ReviewCard extends React.Component<IResultsProps> {
      public state: ITState
      constructor(props: any) {
          super(props)
          this.state = {
              isOpen: true
          }
      }

      boolFlipHandler = () => {
          this.setState({
              isOpen: !this.state.isOpen
          })
      }
    /**
     *
     */
    createList() {
      //replace this with the axios call which should return an
      //array of JSON objects
      let list = [];
      for (let i = 0; i < 5; i++) {
        list.push({
          rating: "4",
          fn: "john",
          ln: "doe",
          reviewTitle: "reveiw title",
          body:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, deleniti in eius ut neque sapiente inventore assumenda asperiores hic debitis! Dolore, est officia. Eos nesciunt alias nemo, facere veniam eveniet."
        });
      }
      return list;
    }
    render() {
  return(
    <div className={this.props.className}>
        <div className="flex-contain">

            <div className="rating">
                {this.props.rating} <FontAwesomeIcon icon={faStar} pointer-events='none' />
            </div>
            <div className="title">
                {this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}
            </div>
        </div>
        
        <div className={this.state.isOpen ? "review" : "review-closed"}>
            {this.props.review}
        </div>
        <div className="name">
            -{this.props.fn.charAt(0).toUpperCase() + this.props.fn.slice(1)} {this.props.ln.substring(0,1).toUpperCase()}
        </div>
        <button className={this.state.isOpen ? 'ex-shr-closed' : 'ex-shr'} onClick={() => this.boolFlipHandler()}>
            <FontAwesomeIcon icon={this.state.isOpen ? faMinusCircle: faPlusCircle}  pointer-events='none'/> 
        </button>
    </div>
  );
}
};

export default ReviewCard;

// const mapStateToProps = (state: IState) => ({
//     reviews: state.reviews
//   });
  
//   const mapDispatchToProps = {
//     singleReivewIsOpen: singleReviewIsOpen,
//     singleReviewMessageReq: singleReviewMessageReq
//   };
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ReviewCard);
