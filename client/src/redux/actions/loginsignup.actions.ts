export const loginTypes = {
  LOGIN_EMAIL_UPDATE: "LOGIN_EMAIL_UPDATE",
  LOGIN_PASSWORD_UPDATE: "LOGIN_PASSWORD_UPDATE",
  SIGNUP_EMAIL_UPDATE: "SIGNUP_EMAIL_UPDATE",
  SIGNUP_PASSWORD_UPDATE: "SIGNUP_PASSWORD_UPDATE",
  SIGNUP_CONFIRM_PASSWORD: "SIGNUP_CONFIRM_PASSWORD",
  SIGNUP_FIRSTNAME_UPDATE: "SIGNUP_FIRSTNAME_UPDATE",
  SIGNUP_LASTNAME_UPDATE: "SIGNUP_LASTNAME_UPDATE",
  LOGIN_USER: "LOGIN_USER",
  SIGNUP_VALIDATE: "SIGNUP_VALIDATE"
};

export const signupValid = (signupValid: boolean) => (dispatch: any) => {
  dispatch({
    payload: {
      signupValid
    },
    type: loginTypes.SIGNUP_VALIDATE
  });
};

export const loginEmailUpdate = (loginEmail: string) => (dispatch: any) => {
  dispatch({
    payload: {
      loginEmail
    },
    type: loginTypes.LOGIN_EMAIL_UPDATE
  });
};

export const loginPasswordUpdate = (loginPassword: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      loginPassword
    },
    type: loginTypes.LOGIN_PASSWORD_UPDATE
  });
};

export const signupEmailUpdate = (signupEmail: string) => (dispatch: any) => {
  dispatch({
    payload: {
      signupEmail
    },
    type: loginTypes.SIGNUP_EMAIL_UPDATE
  });
};

export const signupPasswordUpdate = (signupPassword: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      signupPassword
    },
    type: loginTypes.SIGNUP_PASSWORD_UPDATE
  });
};

export const signupConfirmPassword = (confirmPassword: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      confirmPassword
    },
    type: loginTypes.SIGNUP_CONFIRM_PASSWORD
  });
};

export const signupFirstnameUpdate = (firstname: string) => (dispatch: any) => {
  dispatch({
    payload: {
      firstname
    },
    type: loginTypes.SIGNUP_FIRSTNAME_UPDATE
  });
};

export const signupLastnameUpdate = (lastname: string) => (dispatch: any) => {
  dispatch({
    payload: {
      lastname
    },
    type: loginTypes.SIGNUP_LASTNAME_UPDATE
  });
};
