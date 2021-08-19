import {takeLatest, put} from "redux-saga/effects";
import {FLIGHT_DATE_REQUEST} from "../types";
import axios from "axios";
import {flightDayFailure, flightDaySuccess} from "../actions";

function* flightDateSagaWorker({payload}) {
  const {day, month, year} = payload;
  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/${year}-${month}-${day}`,
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '3b2785777dmsh518dda8487445ffp186a9fjsna4d0c340d2e0'
    }
  };

  try {
    const response = yield axios.request(options);
    const obj = {
      date: `${year}-${month}-${day}`,
      flightsList: response.data.Quotes.map(quote => ({
        time: '00:00',
        price: quote.MinPrice.toString(),
        company: response.data.Carriers.filter(carrier => carrier.CarrierId === quote.OutboundLeg.CarrierIds[0])[0].Name
      }))
    }
    yield put(flightDaySuccess(obj))
  } catch (error) {
    console.log(error);
    yield put(flightDayFailure(error));
  }
}

export function* flightDaySagaWatcher() {
  yield takeLatest(FLIGHT_DATE_REQUEST, flightDateSagaWorker)
}