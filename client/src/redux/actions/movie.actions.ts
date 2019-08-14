export const movieTypes = {
  MOVIE_SEARCH_RESOLVED: "MOVIE_SEARCH_RESOLVED",
  USER_SUBMIT_REQUEST: "USER_SUBMIT_REQUEST",
  INPUT_UPDATE: "INPUT_UPDATE",
  TO_RESULTS: "TO_RESULTS",
  TO_REVIEW: "TO_REVIEW",
  TO_404: "TO_404",
  SEARCH_OBJECT: "SEARCH_OBJECT"
};

export const movieSearchObject = (
  titleList: string[],
  posterList: string[],
  yearList: string[]
) => (dispatch: any) => {
  dispatch({
    payload: {
      titleList,
      posterList,
      yearList
    },
    type: movieTypes.SEARCH_OBJECT
  });
};

export const movieSearchResolved = (
  name: string,
  plot: string,
  year: string,
  posterUrl: string
) => (dispatch: any) => {
  dispatch({
    payload: {
      name,
      plot,
      year,
      posterUrl
    },
    type: movieTypes.MOVIE_SEARCH_RESOLVED
  });
};

export const to404 = (to404: boolean) => (dispatch: any) => {
  dispatch({
    payload: {
      to404
    },
    type: movieTypes.TO_404
  });
};

export const toReview = (toReview: boolean) => (dispatch: any) => {
  dispatch({
    payload: {
      toReview
    },
    type: movieTypes.TO_REVIEW
  });
};

export const toResults = (toResults: boolean) => (dispatch: any) => {
  dispatch({
    payload: {
      toResults
    },
    type: movieTypes.TO_RESULTS
  });
};

export const userSubmitRequest = () => (dispatch: any) => {
  dispatch({
    payload: {},
    type: movieTypes.USER_SUBMIT_REQUEST
  });
};

export const inputUpdate = (inputValue: string) => (dispatch: any) => {
  dispatch({
    payload: {
      inputValue
    },
    type: movieTypes.INPUT_UPDATE
  });
};
