import {put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {AUTH_REQUEST} from "../types";

function* authSagaWorker (action) {
  try {
    const response = yield axios.post('http://localhost:3001/users', {
      login: action.payload.login,
      password: action.payload.password
    })
  }
  catch (e) {
    console.log(e)
  }
}

export function* authSagaWatcher() {
  yield takeLatest(AUTH_REQUEST, authSagaWorker)
}