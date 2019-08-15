export const reviewTypes = {
  REVIEW_RATING_UPDATE: "REVIEW_RATING_UPDATE",
  REVIEW_TITLE_UPDATE: "REVIEW_TITLE_UPDATE",
  REVIEW_BODY_UPDATE: "REVIEW_BODY_UPDATE",
  REVIEW_FIRSTNAME_UPDATE: "REVIEW_FIRSTNAME_UPDATE",
  REVIEW_LASTNAME_UPDATE: "REVIEW_LASTNAME_UPDATE",
  SINGLE_REVIEW_REQ: "SINGLE_REVIEW_REQ",
  SINGLE_REVIEW_ISOPEN: "SINGLE_REVIEW_ISOPEN"
};

export const reviewRatingUpdate = (reviewRating: number) => (dispatch: any) => {
  dispatch({
    payload: {
      reviewRating
    },
    type: reviewTypes.REVIEW_RATING_UPDATE
  });
};

export const reviewTitleUpdate = (reviewTitle: string) => (dispatch: any) => {
  dispatch({
    payload: {
      reviewTitle
    },
    type: reviewTypes.REVIEW_TITLE_UPDATE
  });
};

export const reviewBodyUpdate = (reviewBody: string) => (dispatch: any) => {
  dispatch({
    payload: {
      reviewBody
    },
    type: reviewTypes.REVIEW_BODY_UPDATE
  });
};

export const reviewFirstNameUpdate = (reviewFirstName: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      reviewFirstName
    },
    type: reviewTypes.REVIEW_FIRSTNAME_UPDATE
  });
};

export const reviewLastNameUpdate = (reviewLastName: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      reviewLastName
    },
    type: reviewTypes.REVIEW_LASTNAME_UPDATE
  });
};

export const singleReviewMessageReq = () => (dispatch: any) => {
  dispatch({
    payload: {},
    type: reviewTypes.SINGLE_REVIEW_REQ
  });
};

export const singleReviewIsOpen = (isOpen: boolean) => (dispatch: any) => {
  dispatch({
    payload: {
      isOpen
    },
    type: reviewTypes.SINGLE_REVIEW_ISOPEN
  });
};
