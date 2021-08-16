import {all} from 'redux-saga/effects';
import {authSagaWatcher} from "./authSaga";
import {flightDaySagaWatcher} from "./flightDateSaga";

export default function* rootSaga() {
  yield all([
      authSagaWatcher(),
      flightDaySagaWatcher()
  ])
}