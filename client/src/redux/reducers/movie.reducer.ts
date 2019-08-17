import { movieTypes } from "../actions/movie.actions";

const initialState = {
  name: window.location.href,
  plot: "",
  year: "",
  posterUrl: "",
  inputValue: "",
  toResults: false,
  toReview: false,
  to404: false,
  loadingNewMovie: false,
  titleList: ["empty"],
  posterList: ["empty"],
  yearList: ["empty"]
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case movieTypes.MOVIE_INFO:
      return {
        ...state, 
        name: action.payload.name,
        year: action.payload.year
      }

    case movieTypes.TO_RESULTS:
      return {
        ...state,
        toResults: action.payload.toResults
      };

    case movieTypes.TO_REVIEW:
      return {
        ...state,
        toReview: action.payload.toReview
      };

      case movieTypes.TO_404:
      return {
        ...state,
        to404: action.payload.to404
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
