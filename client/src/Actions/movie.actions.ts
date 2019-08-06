export const pokeTypes = {
    POKE_SEARCH_RESOLVED: 'POKE_SEARCH_RESOLVED',
    USER_SUBMIT_REQUEST: 'USER_SUBMIT_REQUEST',
    INPUT_UPDATE: 'INPUT_UPDATE'
};

export const pokeSearchResolved =
    (name: string, id: number, spriteUrl: string, types: string[]) => (dispatch: any) => {
        dispatch({
            payload: {
                name, id, spriteUrl, types
            },
            type: pokeTypes.POKE_SEARCH_RESOLVED
        });
    }

export const userSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {
        },
        type: pokeTypes.USER_SUBMIT_REQUEST
    });
}

export const inputUpdate = (inputValue: string) => (dispatch: any) => {
    dispatch({
        payload: {
            inputValue
        },
        type: pokeTypes.INPUT_UPDATE
    });
}