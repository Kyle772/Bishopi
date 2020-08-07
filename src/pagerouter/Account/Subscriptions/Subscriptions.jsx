
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import PriceThree from '../../../Klaud/Price/PriceThree.js';
import '../../Pricing/Pricing.scss';

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <React.Fragment>
      <div className="account-card profile">
        <h3>Your Plan</h3>
        <div className="overview-section">
          <p>Subscription: Free Plan</p>
          <p>API Usage: 0% (0 / 10,000) <a href="/apiusage">API Usage</a></p>
        </div>
      </div>
      <div id="pricing" className="account-card profile hide-bgs">
        <PriceThree HideSectionTitle={true} ButtonText="Change Plan" />
      </div>
    </React.Fragment>
  }
}

export default withRouter(Subscriptions);