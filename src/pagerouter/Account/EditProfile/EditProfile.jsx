
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { TextField } from '@material-ui/core';

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <React.Fragment>
      <div className="account-card profile">
        <h3>Edit Profile</h3>
        <form id="EditProfile">
          <TextField id="email" label="Email" /><span></span>
          <TextField id="fname" label="First Name" />
          <TextField id="lname" label="Last Name" />
          <span></span>
          <button className="ml-auto col-6 button" type="submit">Submit</button>
        </form>
        <h3>Change Password</h3>
        <form id="EditProfile">
          <TextField id="currentPass" label="Current Password" /><span></span>
          <TextField id="newPass1" label="New Password" />
          <TextField id="newPass2" label="Confirm New Password" />
          <span></span>
          <button className="ml-auto col-6 button" type="submit">Submit</button>
        </form>
      </div></React.Fragment>
  }
}

export default withRouter(EditProfilePage);