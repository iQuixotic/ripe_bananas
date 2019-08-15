export const userTypes = {
  USER_FIRSTNAME_UPDATE: "USER_FIRSTNAME_UPDATE",
  USER_LASTNAME_UPDATE: "USER_LASTNAME_UPDATE",
  USER_EMAIL_UPDATE: "USER_EAMIL_UPDATE",
  USER_PASSWORD_UPDATE: "USER_PASSWORD_UPDATE",
  USER_PASSWORD_CONFIRM: "USER_PASSWORD_CONFIRM",
  USER_VALIDATE_PASSWORD: "USER_VALIDATE_PASSWORD",
  LOGOUT_USER: "LOGOUT_USER",
  LOGIN_USER: "LOGIN_USER"
};
export const userLogin = (
  userFirstname: string,
  userLastname: string,
  userEmail: string,
  userPassword: string
) => (dispatch: any) => {
  dispatch({
    payload: {
      userFirstname,
      userLastname,
      userEmail,
      userPassword
    },
    type: userTypes.LOGIN_USER
  });
};

export const userValidPassword = (validPassword: boolean) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      validPassword
    },
    type: userTypes.USER_VALIDATE_PASSWORD
  });
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({
    payload: {},
    type: userTypes.LOGOUT_USER
  });
};

export const userFirstnameUpdate = (userFirstname: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      userFirstname
    },
    type: userTypes.USER_FIRSTNAME_UPDATE
  });
};

export const userLastnameUpdate = (userLastname: string) => (dispatch: any) => {
  dispatch({
    payload: {
      userLastname
    },
    type: userTypes.USER_LASTNAME_UPDATE
  });
};

export const userEmailUpdate = (userEmail: string) => (dispatch: any) => {
  dispatch({
    payload: {
      userEmail
    },
    type: userTypes.USER_EMAIL_UPDATE
  });
};

export const userPasswordUpdate = (userPassword: string) => (dispatch: any) => {
  dispatch({
    payload: {
      userPassword
    },
    type: userTypes.USER_PASSWORD_UPDATE
  });
};

export const userPasswordConfirm = (userPasswordConfirm: string) => (
  dispatch: any
) => {
  dispatch({
    payload: {
      userPasswordConfirm
    },
    type: userTypes.USER_PASSWORD_CONFIRM
  });
};
