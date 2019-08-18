import * as React from "react";
import { connect } from "react-redux";
import { IState, IReviewState, ILoginState, IUserState } from "../../redux/reducers";
import { ReviewCard } from "..";
import { singleReviewMessageReq } from "../../redux/actions/pages.actions";
import { singleReviewIsOpen } from "../../redux/actions/dbReviews.actions";
import { APIR } from '../../api'

export interface IResultsProps {
  reviews: IReviewState;
  user: IUserState;
  // singleReviewMessageReq: () => void;
  // singleReivewIsOpen: (bool: boolean) => void;
}
class Reviews extends React.Component<IResultsProps> {
  
  componentDidMount = () => {
    this.getSingleUserMovieReviews();
  }

  createList() {
    //replace this with the axios call which should return an
    //array of JSON objects

    const list: any = this.getSingleUserMovieReviews();
    console.log(list);
    list.forEach((el: { rating: string; fn: string; ln: string; title: string; body: string; }[]) => {
      el.push({
        rating: this.props.reviews.reviewRating,
        fn: this.props.user.userFirstname,
        ln: this.props.user.userLastname,
        title: this.props.reviews.reviewTitle,
        body: this.props.reviews.reviewBody
      });
    });
    return list;
  }

  getSingleUserMovieReviews = () => {
    APIR.getSingleUserMovieRevs(this.props.user.userEmail)
      .then(res =>  res.data)
      .catch(e => { throw e })
  }

  public render() {
    const reviewArrayList = [];

  
    reviewArrayList.push({
      rating: this.props.reviews.reviewRating,
      fn: this.props.user.userFirstname,
      ln: this.props.user.userLastname,
      title: this.props.reviews.reviewTitle,
      body: this.props.reviews.reviewBody
    });

    const reviewList = Object.values(reviewArrayList).map((values, i) => (
      <div key={i} className="col-12">
        <ReviewCard
          className="movie-info"          
          rating={values.rating}
          fn={values.fn}
          ln={values.ln}
          title={values.title}
          review={values.body}
        />
      </div>
    ));
    return <div className="row">{reviewList}</div>;
  }
}

const mapStateToProps = (state: IState) => ({
  reviews: state.reviews,
  user: state.user
});

const mapDispatchToProps = {
  singleReivewIsOpen: singleReviewIsOpen,
  singleReviewMessageReq: singleReviewMessageReq
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
