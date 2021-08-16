import {FLIGHT_DATE_ADD_FAVORITE, FLIGHT_DATE_CLEAR_FAVORITE, FLIGHT_DATE_REMOVE_FAVORITE} from "../types";

const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATE_ADD_FAVORITE :
      return [...state, action.payload]
    case FLIGHT_DATE_REMOVE_FAVORITE :
      return [...state].filter(id => id !== action.payload)
    case FLIGHT_DATE_CLEAR_FAVORITE:
      return []
    default : return state;
  }
}