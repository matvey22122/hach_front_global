import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Login from "./pages/login/login";
import Competition from "./pages/competition/competition";
import './App.scss'
import {ApiState} from "./context/ApiContext";
require('dotenv').config()

function App() {
  return (
      <ApiState>
          <Router>
              <Switch>
                  <Route path={'/'} exact component={Login} />
                  <Route path={'/competition'} component={Competition} />
              </Switch>
          </Router>
      </ApiState>
  );
}

export default App;
