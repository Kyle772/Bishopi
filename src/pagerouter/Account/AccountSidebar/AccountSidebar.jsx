
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import { Link as PageLink } from 'react-router-dom';
import './AccountSidebar.scss';

class AcccountSidebar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () {return <React.Fragment>
        <div className="col-md-12 col-lg-3 account-sidebar">
        <ul>
          <li><PageLink to="/account">Account Overview</PageLink></li>
          <li><PageLink to="/account/profile">Edit Profile</PageLink></li>
          <li><PageLink to="/account/subscriptions">Manage Subscriptions</PageLink></li>
          <li><PageLink to="/account/billing">Billing</PageLink></li>
          <li><PageLink>Invoices</PageLink></li>
          <li><PageLink>Email Settings</PageLink></li>
          <li><PageLink>API Usage</PageLink></li>
        </ul>
        <ul>
          <li><PageLink To="/logout">Logout</PageLink></li>
        </ul>
      </div>
  </React.Fragment>
    }
}

export default withRouter(AcccountSidebar);