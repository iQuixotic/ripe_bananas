import { movieTypes } from "../actions/movie.actions";


const initialState = {
    name: 'Some Generic Something',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    inputValue: '25',
    loadingNewMovie: false
};

export const movieReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
                //id: action.payload.id,
                name: action.payload.name,
               // types: action.payload.types,
                spriteUrl: action.payload.spriteUrl,
                loadingNewMovie: false
            }

        default: break;
    }
    return initialState;
}