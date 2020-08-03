
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import SectionTitle from '../../Klaud/SectionTitle.js';
import Contact from '../../Klaud/Contact/ContactTwo.js';

class SupportPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () {return <div  id="#SupportPage">
    <SectionTitle hideSpan={true} Title="Contact our support team" Titlep="Our team is happy to answer your support queries. Fill out the form and we'll be in touch as soon as possible."></SectionTitle>
    <div id="contactContainer" className="container">
      <Contact></Contact>
    </div>
      <SectionTitle hideSpan={true}  Title="Not looking for support? Contact our Sales team instead." ButtonText="Contact Sales" ButtonLink="/support/sales"></SectionTitle>
  </div>
    }
}

export default withRouter(SupportPage);