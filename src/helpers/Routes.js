import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Timer from '../views/Timer';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route
      exact
      path='/'
      component={() => <Home/>}
      />
      <Route
      exact
      path='/timer'
      component={() => <Timer/>}
      />
      <Route component={NotFound}/>
  </Switch>
  );
}
