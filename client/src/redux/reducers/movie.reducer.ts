import { movieTypes } from "../actions/movie.actions";


const initialState = {
    name: 'Some Generic Something',
    posterUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    inputValue: '25',
    toDashboard: false,
    loadingNewMovie: false,
    searchObject: []
};

export const movieReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case movieTypes.TO_DASHBOARD:
            return {
                ...state,
                toDashboard: action.payload.toDashboard
            }

        case movieTypes.SEARCH_OBJECT:
            return {
                ...state,
                searchObject: action.payload.searchObject
            }        

        case movieTypes.INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.payload.inputValue
            }

        case movieTypes.USER_SUBMIT_REQUEST:
            return {
                ...state,
                loadingNewMovie: true
            }

        case movieTypes.MOVIE_SEARCH_RESOLVED:
            return {
                ...state,
                name: action.payload.name,
                posterUrl: action.payload.posterUrl,
                loadingNewMovie: false
            }

        default: break;
    }
    return initialState;
}