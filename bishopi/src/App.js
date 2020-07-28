import React from 'react';
import Home from './PageRouter/Home/Home';
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
        <Router>
          <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;