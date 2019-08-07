export const messageTypes = {
    DASH_MESSAGE_REQ: 'This a dashboard message...',
    SINGLE_MESSAGE_REQ: 'This a SINGLE PAGE message...',
    MULTI_MESSAGE_REQ: 'This a MULTI-PAGE message...',
    LANDING_MESSAGE_REQ: 'This a NOTHER message...',
    INVALID_MESSAGE_REQ: 'YOU MESSED UP...'
};


export const dashboardMessageReq = () => (dispatch: any) => {
    dispatch({
            payload: {},
        type: messageTypes.DASH_MESSAGE_REQ
    });
}

export const fourOfourMessageReq = () => (dispatch: any) => {
    dispatch({
            payload: {},
        type: messageTypes.INVALID_MESSAGE_REQ
    });
}

export const landingMessageReq = () => (dispatch: any) => {
    dispatch({
            payload: {},
        type: messageTypes.LANDING_MESSAGE_REQ
    });
}

export const multiReviewMessageReq = () => (dispatch: any) => {
    dispatch({
            payload: {},
        type: messageTypes.MULTI_MESSAGE_REQ
    });
}

export const singleReviewMessageReq = () => (dispatch: any) => {
    dispatch({
            payload: {},
        type: messageTypes.SINGLE_MESSAGE_REQ
    });
}
