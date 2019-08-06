import { combineReducers } from "redux";

import { pokeReducer } from "./movie.reducer";

export interface IClickerState {
    clicks: number
};

export interface IPokeState {
    name: string;
    id: number;
    spriteUrl: string;
    types: string[];
    inputValue: string; // Do we consider the current state of input as application state?
    loadingNewPoke: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
   // clicker: IClickerState,
    poke: IPokeState
}

export const state = combineReducers<IState>({
  //  clicker: clickerReducer,
    poke: pokeReducer
})