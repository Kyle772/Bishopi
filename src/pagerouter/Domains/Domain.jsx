
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import Hero from '../../Klaud/Hero/HeroThree.js';
import './Domain.scss';
import SectionTitle from '../../Klaud/SectionTitle.js';
import dotCom from '../../Assets/images/dotCom.svg';
import dotNet from '../../Assets/images/dotNet.svg';
import dotOrg from '../../Assets/images/dotOrg.svg';
import dotInfo from '../../Assets/images/dotInfo.png';

class DomainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return <React.Fragment>
      <div class="mini-hero">
        <Hero BigTitle=""
          SubTitle=""
          Achievement1=""
          Achievement2=""
          imgUrl=""
          inlineResults={false}
        />
      </div>
      <section>
        <SectionTitle Title="Registration &amp; Backorder pricing" />
        <div className="logoSpread">
          <img className="com" src={dotCom} alt=".Com" />
          <img className="net" src={dotNet} alt=".Net" />
          <img className="org" src={dotOrg} alt=".Org" />
          <img className="info" src={dotInfo} alt=".Info" />
        </div>
        <div id="mainfeatures">
          <div className="container">
            <div className="special-featured-list center-icon">
              <div className="single-special-feature">
                <div className="special-icon s4">
                  <i className="fal fa-bars" />
                </div>
                <div className="sf-text">
                  <span>Privacy Protected</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single-special-feature">
                <div className="special-icon s4">
                  <i className="fal fa-bars" />
                </div>
                <div className="sf-text">
                  <span>Privacy Protected</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single-special-feature">
                <div className="special-icon s4">
                  <i className="fal fa-bars" />
                </div>
                <div className="sf-text">
                  <span>Privacy Protected</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="simplified">
        <div className="container">
          <SectionTitle Title="Pricing Simplified"
          Titlep="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum, modi nulla eaque natus ab odit. Architecto necessitatibus id expedita, cumque earum facilis nemo dolor sit amet, non deserunt iste."></SectionTitle>
          <span className="price">$99</span>
          <strong>Per backordered* or registered domain name.</strong>
          <p className="text-center">If multple users submitted backorder requests for a domain we capture, we start a simple 10 day auction. All auctions start at $99.</p>
        </div>
      </section>
    </React.Fragment>
  }
}

export default withRouter(DomainPage);