import React from 'react';
import bootstrap from 'react-bootstrap';
import Home from './pagerouter/Home/Home';
import Login from './pagerouter/Login/Login';
import Signup from './pagerouter/Signup/Signup';
import Domains from './pagerouter/Domains/Domain';
import Pricing from './pagerouter/Pricing/Pricing';
import Support from './pagerouter/Support/Support';
import Account from './pagerouter/Account/AccountBase';
import AOS from 'aos';
import './Assets/fontawesome-pro-5.14.0-web/css/all.css';
import './App/App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter
} from "react-router-dom";

function App() {
    AOS.init();
    return (
        <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/domains">
        <Domains />
      </Route>
      <Route exact path="/pricing">
        <Pricing />
      </Route>
      <Route exact path="/support">
        <Support />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
    </Switch>
    );
}

export default App;