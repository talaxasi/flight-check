import {
  FLIGHT_DATE_FAILURE,
  FLIGHT_DATE_SUCCESS
} from "../types";

const initialState = {};

export const flightDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATE_SUCCESS :
      return {
        date: action.payload.date,
        flightsList: action.payload.flightsList
      }
    case FLIGHT_DATE_FAILURE :
      return {error: action.payload}
    default : return state;
  }
}