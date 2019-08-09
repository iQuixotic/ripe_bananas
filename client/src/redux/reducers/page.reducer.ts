import { messageTypes } from "../actions/pages.actions";


const initialState = {
    message: 'This is a test '
};


export const pageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case messageTypes.DASH_MESSAGE_REQ:
            return {
                ...state,
                // message: action.payload.message
            }

        case messageTypes.SINGLE_MESSAGE_REQ:
            return {
                ...state
            }

        case messageTypes.MULTI_MESSAGE_REQ:
            return {
                ...state
            }

        case messageTypes.LANDING_MESSAGE_REQ:
            return {
                ...state
            }

        case messageTypes.INVALID_MESSAGE_REQ:
            return {
               ...state
            }


        default: break;
    }
    return initialState;
}