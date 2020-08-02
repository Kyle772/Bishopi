import React from 'react';
import Home from './pagerouter/Home/Home';
import Login from './pagerouter/Login/Login';
import Signup from './pagerouter/Signup/Signup';
import ApiUsage from './pagerouter/APIUsage/ApiUsage';
import Billing from './pagerouter/Billing/Billing';
import Domains from './pagerouter/Domains/Domain';
import Pricing from './pagerouter/Pricing/Pricing';
import Subscriptions from './pagerouter/Subscriptions/Subscriptions';
import Support from './pagerouter/Support/Support';
import Account from './pagerouter/Account/Account';
import ProfileEdit from './pagerouter/EditProfile/EditProfile';
import bootstrap from 'react-bootstrap'
import './App.css';
import AOS from 'aos';
import './Assets/fontawesome-pro-5.14.0-web/css/all.css';

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
          </Switch>
    );
}

export default App;