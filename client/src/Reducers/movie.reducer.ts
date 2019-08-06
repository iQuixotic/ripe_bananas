import { pokeTypes } from "../Actions/movie.actions";


const initialState = {
    id: 25,
    name: 'pikachu',
    types: ['electric'],
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    inputValue: '25',
    loadingNewPoke: false
};

export const pokeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case pokeTypes.INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.payload.inputValue
            }

        case pokeTypes.USER_SUBMIT_REQUEST:
            return {
                ...state,
                loadingNewPoke: true
            }

        case pokeTypes.POKE_SEARCH_RESOLVED:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                types: action.payload.types,
                spriteUrl: action.payload.spriteUrl,
                loadingNewPoke: false
            }

        default: break;
    }
    return initialState;
}