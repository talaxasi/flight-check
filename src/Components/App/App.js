import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import Auth from "../Auth/Auth";
import FlightsList from "../FlightsList/FlightsList";

const App = () => {
  return (
      <div className={"App"}>
        <Switch>
          <Route exact path={'/'} component={Auth}/>
          <Route path={'/flights-list'} component={FlightsList}/>
        </Switch>
      </div>
  )
}

export default App;
