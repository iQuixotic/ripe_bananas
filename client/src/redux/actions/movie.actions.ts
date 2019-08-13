export const movieTypes = {
    MOVIE_SEARCH_RESOLVED: 'MOVIE_SEARCH_RESOLVED',
    USER_SUBMIT_REQUEST: 'USER_SUBMIT_REQUEST',
    INPUT_UPDATE: 'INPUT_UPDATE',
    TO_DASHBOARD: 'TO_DASHBOARD',
    SEARCH_OBJECT: 'SEARCH_OBJECT'
};

export const movieSearchObject = (searchObject: any) => (dispatch: any) => {
        dispatch({
            payload: {
                searchObject
            },
            type: movieTypes.SEARCH_OBJECT
        });
    }

export const movieSearchResolved =
    (name: string, posterUrl: string) => (dispatch: any) => {
        dispatch({
            payload: {
                name, posterUrl
            },
            type: movieTypes.MOVIE_SEARCH_RESOLVED
        });
    }

export const toDashboard = (toDashboard: boolean) => (dispatch: any) => {
    dispatch({
        payload: {
            toDashboard
        },
        type: movieTypes.TO_DASHBOARD
    })
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