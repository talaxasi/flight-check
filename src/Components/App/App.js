import React, {useEffect} from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import Auth from "../Auth/Auth";
import FlightsList from "../FlightsList/FlightsList";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {clearFavorite, flightDayClear} from "../../store/actions";

const App = () => {
  const authorized = useSelector(state => state.auth.login);
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorized) {
      dispatch(clearFavorite());
      dispatch(flightDayClear());
    }
  }, [authorized])

  return (
      <div className={"App"}>
        <Switch>
          <Route exact path={'/'} component={Auth}/>
          <Route path={'/flights-list'} component={FlightsList}/>
        </Switch>
        {authorized ? <Redirect to={'/flights-list'}/> : <Redirect to={'/'}/>}
      </div>
  )
}

export default App;
