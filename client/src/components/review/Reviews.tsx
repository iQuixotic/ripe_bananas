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

  createList(): any {
    //replace this with the axios call which should return an
    //array of JSON objects

    const list: any = this.getSingleUserMovieReviews();

    const arr: any = [];
    if (list) {
      for (let i = 0; i < list.length; i++) {
        arr.push({
          rating: list[i].rating,
          fn: list[i].user.firstname,
          ln: list[i].user.lastname,
          title: list[i].title,
          body: list[i].review
        });
      }
    }
    // list.forEach((el: { rating: string; fn: string; ln: string; title: string; body: string; }[]) => {
    //   arr.push({
    //     rating: el.rating,
    //     fn: el.fn,
    //     ln: el.ln,
    //     title: el.title,
    //     body: el.body
    //   });
    // });
    console.log(arr);
    return arr;
  }

  getSingleUserMovieReviews = () => {
    APIR.getSingleUserMovieRevs(this.props.user.userEmail)
      .then(res => res.data)
      .catch(e => { throw e })
  }

  public render() {
    const reviewArrayList = this.createList();

    const reviewList = reviewArrayList.map((values: any) => (
      <div key={values.body} className="col-12">
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


// import * as React from "react";
// import { connect } from "react-redux";
// import { IState, IReviewState, ILoginState, IUserState } from "../../redux/reducers";
// import { ReviewCard } from "..";
// import { singleReviewMessageReq } from "../../redux/actions/pages.actions";
// import { singleReviewIsOpen } from "../../redux/actions/dbReviews.actions";
// import { APIR } from '../../api'

// export interface IResultsProps {
//   reviews: IReviewState;
//   user: IUserState;
//   // singleReviewMessageReq: () => void;
//   // singleReivewIsOpen: (bool: boolean) => void;
// }

// let reviewList: any;
// let x: any;
// class Reviews extends React.Component<IResultsProps> {

//   state = {
//     list: [],
//     isLoaded: false
//   }

//   componentDidMount = () => {
//     this.getSingleUserMovieReviews();
//     this.createList();   
//   }

//   createList(): any {

//     const list: any = x;
//     console.log("list here: ", list)
//     const arr: any = [];
//     if (list) {
//       for (let i = 0; i < list.length; i++) {
//         arr.push({
//           rating: list[i].rating,
//           fn: list[i].user.firstname,
//           ln: list[i].user.lastname,
//           title: list[i].title,
//           body: list[i].review
//         });
//       }
        
//         this.setState({
//           list: arr,
//           isLoaded: true
//         })
//     }
//   }

//   getSingleUserMovieReviews = () => {
//     APIR.getSingleUserMovieRevs(this.props.user.userEmail)
//       .then(res => x = res.data)
//       .catch(e => { throw e })
//   }

//   public render() {
      
//       const reviewArrayList = this.createList();
  
//       // const reviewList = reviewArrayList.map((values: any) => (
//       //   <div key={values.body} className="col-12">
//       //     <ReviewCard
//       //       className="movie-info"
//       //       rating={values.rating}
//       //       fn={values.fn}
//       //       ln={values.ln}
//       //       title={values.title}
//       //       review={values.body}
//       //     />
//       //   </div>
//       // ));
//     return <div className="row">{this.state.isLoaded ? reviewList : <div></div>}</div>;
//   }
// }

// const mapStateToProps = (state: IState) => ({
//   reviews: state.reviews,
//   user: state.user
// });

// const mapDispatchToProps = {
//   singleReivewIsOpen: singleReviewIsOpen,
//   singleReviewMessageReq: singleReviewMessageReq
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Reviews);
