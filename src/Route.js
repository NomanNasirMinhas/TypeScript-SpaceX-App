import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './components/Home'
  import Motto from './components/Motto';
import Info from './components/Info';
import Launches from './components/Launches';
import LaunchInfo from './components/LaunchInfo';
import Missions from './components/Missions';
import Appbar from './components/Appbar'

function RouteConfig() {
  return (
    <div>

      <Router>
        <Appbar />
        <Switch>
          <Route exact path="/" component={Motto}></Route>
          <Route exact path="/missions" component={Missions}></Route>
          <Route exact path="/launches" component={Launches}></Route>
          <Route exact path="/about" component={Info}></Route>
          <Route exact path="/launch/:id" component={LaunchInfo}></Route>
        </Switch>

    </Router>


    </div>
  );
}

export default RouteConfig;
