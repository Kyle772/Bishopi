
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { Link as PageLink } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import CountrySelect from '../../../App/components/countryselect/CountrySelect';

class BillingPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () {return <React.Fragment>
    <div className="account-card">
      <h3>Your Subscription Info</h3>
      <p>You don't have an active subscription.</p>
      <button className="button"><PageLink to="/account/subscriptions">Subscribe</PageLink></button>
    </div>
    <div className="account-card">
      <h3>Your Card Info</h3>
      <p>No card currently on file</p>
      <button className="button" data-target="cardmodal">Add Card</button>
    </div>
    <div className="account-card invoice-details">
      <h3>Update Invoice Details</h3>
      <form id="InvoiceDetails">
        <TextField id="company" label="Business/Company Name" />
        <TextField id="address1" label="Address 1" />
        <TextField id="address2" label="Address 2" />
        <TextField id="city" label="City" />
        <TextField id="state" label="State" />
        <TextField id="postal" label="Postal Code" />
        <CountrySelect></CountrySelect><span></span>
        <TextField id="id-type" label="SSN/EIN" />
        <TextField id="tax-id" label="Tax ID" />
      </form>
      <button className="button" data-target="cardmodal">Add Card</button>
    </div>
  </React.Fragment>
    }
}

export default withRouter(BillingPage);