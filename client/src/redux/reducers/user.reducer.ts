import { userTypes } from "../actions/users.actions";

const initialState = {
  userFirstname: "",
  userLastname: "",
  userEmail: "",
  userPassword: "",
  userConfirmPassword:""
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userTypes.USER_FIRSTNAME_UPDATE:
      return {
        ...state,
        userFirstname: action.payload.userFirstname
      };

    case userTypes.USER_LASTNAME_UPDATE:
      return {
        ...state,
        userLastname: action.payload.userLastname
      };

    case userTypes.USER_EMAIL_UPDATE:
      return {
        ...state,
        userEmail: action.payload.userEmail
      };

    case userTypes.USER_PASSWORD_UPDATE:
      return {
        ...state,
        userPassword: action.payload.userPassword
      };
    case userTypes.USER_PASSWORD_CONFIRM:
      return {
        ...state,
        userConfirmPassword: action.payload.userConfirmPassword
      };
    default:
      break;
  }
  return initialState;
};
