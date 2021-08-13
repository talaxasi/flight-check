import {AUTH_FAILURE, AUTH_SUCCESS} from "../types";


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
    default: return state
  }
}