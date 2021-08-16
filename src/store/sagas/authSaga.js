import {put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {AUTH_REQUEST} from "../types";
import {authFailure, authSuccess} from "../actions";

function* authSagaWorker (action) {
  try {
    const response = yield axios.post('http://localhost:3001/users', {
      login: action.payload.login,
      password: action.payload.password
    })
    const ok = yield response.statusText === 'Created';
    if (ok) yield put(authSuccess(action.payload))
  }
  catch (e) {
    console.log(e);
    yield put(authFailure({error: 'Has done created'}))
  }
}

export function* authSagaWatcher() {
  yield takeLatest(AUTH_REQUEST, authSagaWorker)
}