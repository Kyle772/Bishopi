
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";

class OverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <React.Fragment>
      <div className="account-card notifications">
        <i class="fad fa-bells"></i>You have no new notifications
      </div>
      <div className="account-card api-key">
        <i class="fad fa-key"></i>Your API Access Key
        <p className="code">kdjlbasdbajklsbdjbasdbjkasbdlkjasbdjkl</p>
      </div>
      <div className="account-card plan">
        <h3>Your Plan</h3>
        <div className="overview-section">
          <p>Subscription: Free Plan</p>
          <p>API Usage: 0% (0 / 10,000) <a href="/apiusage">API Usage</a></p>
        </div>
        <h3>Your Account</h3>
        <div className="overview-section">
          <p>Name: Yoel Mark</p>
          <p>Email: Example@example.com</p>
          <p>Notifications: Subscribed</p>
        </div>
        <h3>Payment</h3>
        <div className="overview-section">
          <p>Current: No payment methods on file</p>
          <p>Billing Period: 2020-07-01 - 2020-07-31</p>
          <p>Total Due: $0.00</p>
        </div>
      </div>
    </React.Fragment>
  }
}

export default withRouter(OverviewPage);