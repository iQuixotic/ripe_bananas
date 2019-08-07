import { combineReducers } from "redux";

import { movieReducer } from "./movie.reducer";
import { pageReducer } from "./page.reducer";



export interface IPageState {
  message: string;
}

export interface IMovieState {
    name: string;
    spriteUrl: string;
    inputValue: string;
    loadingNewMovie: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
   // clicker: IClickerState,
   page: IPageState
    movie: IMovieState
}

export const state = combineReducers<IState>({
  //  clicker: clickerReducer,
  page: pageReducer,
  movie: movieReducer
})