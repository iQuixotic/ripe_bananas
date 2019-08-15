import {reviewTypes} from '../actions/dbReviews.actions';

const initialState = {
    rating: 4,
    title: 'batman',
    body: 'it was bleh',
    firstName:'amy',
    lastName:'smith',

}

export const dbReviewsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case reviewTypes.REVIEW_RATING_UPDATE:
            return {
                ...state,
                reviewRating: action.payload.reviewRating,
                
        }
        case reviewTypes.REVIEW_TITLE_UPDATE:
            return {
                ...state,
                reviewTitle: action.payload.reviewTitle,
                
            }
        case reviewTypes.REVIEW_BODY_UPDATE:
            return {
                ...state,
                reviewBody: action.payload.reviewBody
            

            }  
        case reviewTypes.REVIEW_FIRSTNAME_UPDATE:
            return {
                ...state,
                reviewFirstName: action.payload.reviewFirstName
            }

        case reviewTypes.REVIEW_LASTNAME_UPDATE:
            return {
                ...state, 
                reviewLastName: action.payload.reviewLastName
            }
        default: break;      
    }
    return initialState;
}