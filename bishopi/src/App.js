import React from 'react';
import Home from './PageRouter/Home/Home';
import Login from './PageRouter/Login/Login';
import Signup from './PageRouter/Signup/Signup';
import ApiUsage from './PageRouter/APIUsage/ApiUsage';
import Billing from './PageRouter/Billing/Billing';
import Domains from './PageRouter/Domains/Domain';
import Pricing from './PageRouter/Pricing/Pricing';
import Subscriptions from './PageRouter/Subscriptions/Subscriptions';
import Support from './PageRouter/Support/Support';
import Account from './PageRouter/Account/Account';
import ProfileEdit from './PageRouter/EditProfile/EditProfile';
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