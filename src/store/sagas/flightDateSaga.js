import {takeLatest, put} from "redux-saga/effects";
import {FLIGHT_DATE_REQUEST} from "../types";
import axios from "axios";
import {flightDayFailure, flightDaySuccess} from "../actions";

function* flightDateSagaWorker ({payload}) {
  try {
    const response = yield axios.get(`http://localhost:3001/flights?date_like=${payload.month}-${payload.day}`)
    if (response.data.length) yield put(flightDaySuccess({
      date: response.data[0].date,
      flightsList: response.data[0].list
    }))
  }
  catch (error) {
    yield put(flightDayFailure(error));
    console.log(error);
  }
}

export function* flightDaySagaWatcher() {
  yield takeLatest(FLIGHT_DATE_REQUEST, flightDateSagaWorker)
}