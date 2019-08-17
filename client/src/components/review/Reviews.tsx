import * as React from "react";
import { connect } from "react-redux";
import { IState, IReviewState } from "../../redux/reducers";
import { ReviewCard } from "..";
import { singleReviewMessageReq } from "../../redux/actions/pages.actions";
import { singleReviewIsOpen } from "../../redux/actions/dbReviews.actions";

export interface IResultsProps {
  // reviews: IReviewState;
  // singleReviewMessageReq: () => void;
  // singleReivewIsOpen: (bool: boolean) => void;
}
class Reviews extends React.Component<IResultsProps> {
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

  public render() {
    const reviewArrayList = this.createList();

    const reviewList = Object.values(reviewArrayList).map((values, i) => (
      <div key={i} className="col-12">
        <ReviewCard
          className="movie-info"          
          rating={values.rating}
          fn={values.fn}
          ln={values.ln}
          title={values.reviewTitle}
          review={values.body}
        />
      </div>
    ));
    return <div className="row">{reviewList}</div>;
  }
}

export default Reviews;
// const mapStateToProps = (state: IState) => ({
//   reviews: state.reviews
// });

// const mapDispatchToProps = {
//   singleReivewIsOpen: singleReviewIsOpen,
//   singleReviewMessageReq: singleReviewMessageReq
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Reviews);
