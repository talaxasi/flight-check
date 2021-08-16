import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {flightDateReducer} from "./flightDateReducer";
import {favoritesReducer} from "./favoritesReducer";
import {assetsReducer} from "./assetsReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  flightDate: flightDateReducer,
  favorites: favoritesReducer,
  assets: assetsReducer
})