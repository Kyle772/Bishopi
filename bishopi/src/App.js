import React from 'react';
import $ from 'jquery';
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
import './Assets/css/style.css';
import './Assets/css/responsive.css';
import './App.css';
import './Assets/js/main.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter
} from "react-router-dom";

function App() {
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