import { movieTypes } from "../actions/movie.actions";

const initialState = {
  name: "",
  plot: "",
  year: "",
  posterUrl: "",
  inputValue: "",
  toDashboard: false,
  toReview: false,
  loadingNewMovie: false,
  titleList: ["empty"],
  posterList: ["empty"],
  yearList: ["empty"]
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case movieTypes.TO_DASHBOARD:
      return {
        ...state,
        toDashboard: action.payload.toDashboard
      };

    case movieTypes.TO_REVIEW:
      return {
        ...state,
        toReview: action.payload.toReview
      };

    case movieTypes.SEARCH_OBJECT:
      return {
        ...state,
        titleList: action.payload.titleList,
        posterList: action.payload.posterList,
        yearList: action.payload.yearList
      };

    case movieTypes.INPUT_UPDATE:
      return {
        ...state,
        inputValue: action.payload.inputValue
      };

    case movieTypes.USER_SUBMIT_REQUEST:
      return {
        ...state,
        loadingNewMovie: true
      };

    case movieTypes.MOVIE_SEARCH_RESOLVED:
      return {
        ...state,
        name: action.payload.name,
        plot: action.payload.plot,
        year: action.payload.year,
        posterUrl: action.payload.posterUrl,
        loadingNewMovie: false
      };

    default:
      break;
  }
  return initialState;
};
