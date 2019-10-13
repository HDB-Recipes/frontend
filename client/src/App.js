import React from "react";
import "./App.css";
import Login from './components/Login'
import SignUp from './components/SignUp'
import Kitchen from './views/Kitchen'
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <PrivateRoute exact path="/kitchen" view={Kitchen} />
        {/* <PrivateRoute exact path="/:id" view={Event} /> */}
        {/* <PrivateRoute exact path="/" view={Events} /> */}
      </Switch>
  );
}

export default App;
