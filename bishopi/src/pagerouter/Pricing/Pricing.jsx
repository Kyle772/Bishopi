
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import SectionTitle from '../../Klaud/SectionTitle';
import PriceThree from '../../Klaud/Price/PriceThree.js';
import './Pricing.scss';

class PricingPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () {return <React.Fragment>
    <SectionTitle Title="Simple, flexible pricing" Titlep="Get two months free with annual billing" HideSpan={true}/>
    <section id="pricing">
                <div className="container">
                    <PriceThree />
                </div>
            </section>
  </React.Fragment>
    }
}

export default withRouter(PricingPage);