import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class PriceThree extends Component {
    render() {
        var bg = require('../../Assets/images/pricing/1.png');
        var bg2 = require('../../Assets/images/pricing/1.png');
        var bg3 = require('../../Assets/images/pricing/1.png');

        return (
            <section className="package-items-wrap section-padding pt-0 mbm-20" id="price">
                <div className="container">                    
                <SectionTitle Title="Pricing Plan"  Titlep="Choose the plan that's right for your growing team!" />  
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="tab-content">
                                <div id="month" className="tab-pane in active">
                                    <div className="row">
                                        <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                            <div className="single-package" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="package-shape" style ={ { backgroundImage: "url("+bg+")" } } />
                                                <div className="package-name text-center">
                                                    <h4>Basic</h4>
                                                </div>
                                                <div className="package-features-price">
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />Up to 5 users</li>
                                                        <li><i className="fal fa-check-circle" />200 objects / month</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited queries</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited analytics</li>
                                                    </ul>
                                                    <div className="price text-center">
                                                        <span>59</span>
                                                    </div>
                                                </div>
                                                <div className="package-btn">
                                                    <a href=".#">Get Started</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                            <div className="single-package active">
                                                <div className="package-shape" style ={ { backgroundImage: "url("+bg2+")" } } />
                                                <div className="package-name text-center">
                                                    <h4>Optimum</h4>
                                                </div>
                                                <div className="package-features-price">
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />Up to 15 users</li>
                                                        <li><i className="fal fa-check-circle" />400 objects / month</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited queries</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited analytics</li>
                                                    </ul>
                                                    <div className="price text-center">
                                                        <span>99</span>
                                                    </div>
                                                </div>
                                                <div className="package-btn">
                                                    <a href=".#">Get Started</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                            <div className="single-package" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="package-shape" style ={ { backgroundImage: "url("+bg3+")" } } />
                                                <div className="package-name text-center">
                                                    <h4>Full</h4>
                                                </div>
                                                <div className="package-features-price">
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />Up to 50 users</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited objects</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited queries</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited analytics</li>
                                                    </ul>
                                                    <div className="price text-center">
                                                        <span>149</span>
                                                    </div>
                                                </div>
                                                <div className="package-btn price-btn3">
                                                    <a href=".#">Get Started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}

export default PriceThree