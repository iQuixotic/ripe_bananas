import { loginTypes } from "../actions/loginsignup.actions";

const initialState = {
  loginEmail: "",
  loginPassword: "",
  signupEmail: "",
  signupPassword: "",
  firstname: "",
  lastname: "",
  confirmPassword: "",
  signupValid: true,
  isLoggedIn: false
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      };
    case loginTypes.SIGNUP_VALIDATE:
      return {
        ...state,
        signupValid: action.payload.signupValid
      };
    case loginTypes.LOGIN_USER:
      return {
        ...state,
        loginEmail: action.payload.loginEmail,
        loginPassword: action.payload.loginPassword
      };
    case loginTypes.LOGIN_EMAIL_UPDATE:
      return {
        ...state,
        loginEmail: action.payload.loginEmail,
        loginPassword: action.payload.loginPassword
      };
    case loginTypes.LOGIN_PASSWORD_UPDATE:
      return {
        ...state,
        loginPassword: action.payload.loginPassword
      };
    case loginTypes.SIGNUP_EMAIL_UPDATE:
      return {
        ...state,
        signupEmail: action.payload.signupEmail
      };
    case loginTypes.SIGNUP_PASSWORD_UPDATE:
      return {
        ...state,
        signupPassword: action.payload.signupPassword
      };
    case loginTypes.SIGNUP_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload.confirmPassword
      };
    case loginTypes.SIGNUP_FIRSTNAME_UPDATE:
      return {
        ...state,
        firstname: action.payload.firstname
      };
    case loginTypes.SIGNUP_LASTNAME_UPDATE:
      return {
        ...state,
        lastname: action.payload.lastname
      };
    default:
      break;
  }
  return initialState;
};
