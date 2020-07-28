
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import Hero from '../../Klaud/Hero/HeroThree.js';
import Services from '../../Klaud/Services/ServiceThree.js';
import SectionTitle from '../../Klaud/SectionTitle.js';
import ServiceData from '../../Klaud/Services/ServiceData';
import PriceThree from '../../Klaud/Price/PriceThree.js';
import './Home.scss';

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () { return <React.Fragment>
    <Hero BigTitle="Find Your Perfect Name Today. Klaud Makes It Fast & Easy." 
        SubTitle="Up to 50% Off Domain and Hosting, Starting from $ 2.50/Month. Free SSL Certificate, Money Back Gurantee." 
        Achievement1="" 
        Achievement2="" 
        imgUrl="" 
    />
    <div className="container">
        <Services ServiceData={ServiceData}/>
		</div>
    <div id="standalone-title">
        <SectionTitle Title="Access exclusive features with a free account" />
        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio fugiat maiores!</p>
        <a href="#" class="theme-btn ml-auto mr-auto">Create a FREE account</a>
        <p className="text-center">No credit card required</p>
    </div>
    <div id="mainfeatures" className="container">
        <SectionTitle Title="Main Features" />
    </div>
    <div id="pricing" className="container">
        <PriceThree/>
    </div>
    </React.Fragment>
    }
}

export default withRouter(HomePage);