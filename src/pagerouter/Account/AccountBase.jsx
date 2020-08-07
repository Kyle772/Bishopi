
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import { Link as PageLink } from 'react-router-dom';

import Overview from './Overview';
import EditProfile from './EditProfile/EditProfile';
import Subscriptions from './Subscriptions/Subscriptions';
import Billing from './Billing/Billing';

import AccountSidebar from './AccountSidebar/AccountSidebar';
import './Account.scss';

class AccountTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <React.Fragment>
      <Router>
        <section id="AccountSection">
          <div className="container row">
            <AccountSidebar/>
            <div className="col-lg-9 col-md-12">
              <Switch>
                <Route exact path="/account">
                  <Overview />
                </Route>
                <Route exact path="/account/profile">
                  <EditProfile />
                </Route>
                <Route exact path="/account/subscriptions">
                  <Subscriptions />
                </Route>
                <Route exact path="/account/billing">
                  <Billing />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </React.Fragment>
  }
}

export default withRouter(AccountTemplate);