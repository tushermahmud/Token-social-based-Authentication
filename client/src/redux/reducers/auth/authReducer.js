import cookie from "js-cookie";
import { setCookie, setLocalStorage } from "../../../helpers/auth";
import {
  FORGOT_PASSWORD,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  ACTIVATE,
  LOADING,
} from "../../types/types";

const INITIAL_STATE = {
  token: cookie.get("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
};
// cookie.set("token", action.payload.token, {
//   expires: 1,
// });
const registration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        IsEmailVerified: action.payload.IsEmailVerified,
        IsMobleVerified: action.payload.IsMobileVerified,
      };
    case LOGIN_SUCCESS:
      setCookie("token",action.payload.token);
      setLocalStorage("user", action.payload.user);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        user:action.payload.user
      };
    case LOADING:
      return {
        ...state,
        ...action.payload,
        loading: action.payload,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        ...action.payload,
        loading: action.payload,
      };
    case ACTIVATE:{
      return {
        ...state,
        ...action.payload,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
export default registration;
