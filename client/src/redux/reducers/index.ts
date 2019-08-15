import { combineReducers } from "redux";

import { movieReducer } from "./movie.reducer";
import { pageReducer } from "./page.reducer";
import { loginReducer } from './loginsignup.reducer';
import { reviewLastNameUpdate } from "../actions/dbReviews.actions";
import { dbReviewsReducer} from "../reducers/dbReviews.reducer";
import { userReducer } from "./user.reducer";

export interface ILoginState {
    loginEmail: string;
    loginPassword: string;
    signupEmail: string;
    signupPassword: string;
    firstname: string;
    lastname: string;
    confirmPassword: string;
}

export interface IReviewState {
    rating: string;
    title: string;
    body: string,
    firstName: string,
    lastName: string,
    isOpen: boolean
}

export interface IUserState {    
  userFirstname: string,
  userLastname: string,
  userEmail: string,
  userPassword: string,
  userConfirmPassword:string
}

export interface IPageState {
    message: string;
}

export interface IMovieState {
    name: string;
    plot: string;
    year: string;
    posterUrl: string;
    inputValue: string;
    toResults: boolean;
    toReview: boolean;
    to404: boolean;
    titleList: Array<string>;
    posterList: Array<string>;
    yearList: Array<string>;
    loadingNewMovie: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
   // clicker: IClickerState,
   page: IPageState
    movie: IMovieState
    login: ILoginState
    reviews: IReviewState
    user: IUserState
}

export const state = combineReducers<IState>({
  //  clicker: clickerReducer,
  page: pageReducer,
  movie: movieReducer,
  login: loginReducer,
  reviews: dbReviewsReducer,
  user: userReducer
})