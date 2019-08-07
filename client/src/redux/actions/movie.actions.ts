export const movieTypes = {
    MOVIE_SEARCH_RESOLVED: 'MOVIE_SEARCH_RESOLVED',
    USER_SUBMIT_REQUEST: 'USER_SUBMIT_REQUEST',
    INPUT_UPDATE: 'INPUT_UPDATE'
};

export const movieSearchResolved =
    (name: string, spriteUrl: string) => (dispatch: any) => {
        dispatch({
            payload: {
                name, spriteUrl
            },
            type: movieTypes.MOVIE_SEARCH_RESOLVED
        });
    }

export const userSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {
        },
        type: movieTypes.USER_SUBMIT_REQUEST
    });
}

export const inputUpdate = (inputValue: string) => (dispatch: any) => {
    dispatch({
        payload: {
            inputValue
        },
        type: movieTypes.INPUT_UPDATE
    });
}