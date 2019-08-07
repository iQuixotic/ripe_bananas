import { combineReducers } from "redux";

import { movieReducer } from "./movie.reducer";


export interface IMovieState {
    name: string;
   // id: number;
   
    spriteUrl: string;
    //types: string[];
    inputValue: string; // Do we consider the current state of input as application state?
    loadingNewMovie: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
   // clicker: IClickerState,
    movie: IMovieState
}

export const state = combineReducers<IState>({
  //  clicker: clickerReducer,
    movie: movieReducer
})