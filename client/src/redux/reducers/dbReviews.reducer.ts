import { reviewTypes } from "../actions/dbReviews.actions";

const initialState = {
  reviewRating: "",
  reviewTitle: "",
  reviewBody:"",
  reviewFirstname: "",
  reviewLastname: "",
  isOpen: false
};

export const dbReviewsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case reviewTypes.REVIEW_RATING_UPDATE:
      return {
        ...state,
        reviewRating: action.payload.reviewRating
      };
    case reviewTypes.REVIEW_TITLE_UPDATE:
      return {
        ...state,
        reviewTitle: action.payload.reviewTitle
      };
    case reviewTypes.REVIEW_BODY_UPDATE:
      return {
        ...state,
        reviewBody: action.payload.reviewBody
      };
    case reviewTypes.REVIEW_FIRSTNAME_UPDATE:
      return {
        ...state,
        reviewFirstname: action.payload.reviewFirstname
      };

    case reviewTypes.REVIEW_LASTNAME_UPDATE:
      return {
        ...state,
        reviewLastname: action.payload.reviewLastname
      };

    case reviewTypes.SINGLE_REVIEW_ISOPEN:
      return {
        ...state,
        isOpen: !action.payload.isOpen
      };
    default:
      break;
  }
  return initialState;
};
