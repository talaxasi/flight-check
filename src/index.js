import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App/>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
