
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import SectionTitle from '../../Klaud/SectionTitle.js';
import Contact from '../../Klaud/Contact/ContactTwo.js';
import './Contact.scss';
import './Support.scss';

class SupportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <section id="SupportPage">
      <div className="container">
        <SectionTitle HideSpan={true} Title="Contact our support team" Titlep="Our team is happy to answer your support queries. Fill out the form and we'll be in touch as soon as possible."></SectionTitle>
        <div id="contactContainer" className="container">
          <Contact></Contact>
        </div>
        <SectionTitle HideSpan={true} Title="Not looking for support? Contact our Sales team instead." ButtonText="Contact Sales" ButtonLink="/support/sales"></SectionTitle>
      </div>
    </section>
  }
}

export default withRouter(SupportPage);