import {
  AUTH_FAILURE,
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_SUCCESS, FLIGHT_DATE_ADD_FAVORITE, FLIGHT_DATE_CLEAR, FLIGHT_DATE_CLEAR_FAVORITE,
  FLIGHT_DATE_FAILURE, FLIGHT_DATE_REMOVE_FAVORITE,
  FLIGHT_DATE_REQUEST,
  FLIGHT_DATE_SUCCESS
} from "./types";

export const authSuccess = props => ({
  type: AUTH_SUCCESS,
  payload: {login: props.login, password: props.password}
});
export const authFailure = error => ({
  type: AUTH_FAILURE,
  payload: {error}
});
export const authRequest = props => ({
  type: AUTH_REQUEST,
  payload: {login: props.login, password: props.password}
})
export const authLogout = () => ({type: AUTH_LOGOUT})

export const flightDayRequest = ({day, month, year}) => ({
  type: FLIGHT_DATE_REQUEST,
  payload: {day, month, year}
})
export const flightDaySuccess = ({date, flightsList}) => ({
  type: FLIGHT_DATE_SUCCESS,
  payload: {date, flightsList}
})
export const flightDayFailure = error => ({
  type: FLIGHT_DATE_FAILURE,
  payload: error
})
export const flightDayClear = () => ({type: FLIGHT_DATE_CLEAR})

export const addFavorite = favorite => ({
  type: FLIGHT_DATE_ADD_FAVORITE,
  payload: favorite
})
export const removeFavorite = favorite => ({
  type: FLIGHT_DATE_REMOVE_FAVORITE,
  payload: favorite
})
export const clearFavorite = () => ({type: FLIGHT_DATE_CLEAR_FAVORITE})
