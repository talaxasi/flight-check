import {AUTH_FAILURE, AUTH_LOGOUT, AUTH_SUCCESS} from "../types";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {
        login: action.payload.login,
        password: action.payload.password
      }
    case AUTH_FAILURE :
      return {
        error: action.payload
      }
    case AUTH_LOGOUT :
      return {}
    default: return state
  }
}