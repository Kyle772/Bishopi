
import React, { Component } from 'react';
import AccountTemplate from './AccountBase';

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

  componentDidMount() {}
  
  render () {return <React.Fragment>
        
  </React.Fragment>
    }
}

export default withRouter(OverviewPage);