
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import { Link as PageLink } from 'react-router-dom';

class AcccountSidebar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () {return <React.Fragment>
        <div className="col-3">
        <ul>
          <li><PageLink>Account Overview</PageLink></li>
          <li><PageLink>Edit Profile</PageLink></li>
          <li><PageLink>Manage Subscriptions</PageLink></li>
          <li><PageLink>Billing</PageLink></li>
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