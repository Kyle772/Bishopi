
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import { Link as PageLink } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';
import Overview from './Overview';
import AccountSidebar from './AccountSidebar';

class AccountTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <React.Fragment>
      <Router>
        <section>
          <div className="container row">
          <AccountSidebar/>
            <Switch>
              <Route exact path="/account">
                <Overview />
              </Route>
              <Route exact path="/account/profile">
                <EditProfile />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </React.Fragment>
  }
}

export default withRouter(AccountTemplate);