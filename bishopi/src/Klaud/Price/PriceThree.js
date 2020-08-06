import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class PriceThree extends Component {
    render() {
        let { Title, Titlep } = this.props;
        if (!Title) { Title = "Pricing Plan" }
        if (!Titlep) { Titlep = "Choose the plan that's right for your growing team!" }
        return (<React.Fragment>
            <SectionTitle HideSpan={true} Title={Title} Titlep={Titlep} />
            <div className="row" >
                <div className="col-12 col-lg-12">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="package-control mb40">
                            <ul className="nav nav-pills">
                                <li className="">
                                    <a data-toggle="pill" href="#month" className="active">Monthly</a>
                                </li>
                                <li className="">
                                    <a data-toggle="pill" href="#year" className="">Yearly</a>
                                </li>
                                <span className="toggle-active"></span>
                            </ul>
                            <div className="discount">Save up to 20%!</div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="month" className="tab-pane in active">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                    <div className="single-package" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="package-shape" />
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
                                        <div className="package-shape" />
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
                                        <div className="package-shape" />
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
                        <div id="year" className="tab-pane in">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                                    <div className="single-package">
                                        <div className="package-shape" />
                                        <div className="package-name text-center">
                                            <h4>Basic</h4>
                                        </div>
                                        <div className="package-features-price">
                                            <ul>
                                                <li><i className="fal fa-check-circle" />Up to 5 users</li>
                                                <li><i className="fal fa-check-circle" />200 objects / year</li>
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
                                        <div className="package-shape" />
                                        <div className="package-name text-center">
                                            <h4>Optimum</h4>
                                        </div>
                                        <div className="package-features-price">
                                            <ul>
                                                <li><i className="fal fa-check-circle" />Up to 15 users</li>
                                                <li><i className="fal fa-check-circle" />400 objects / year</li>
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
                                    <div className="single-package">
                                        <div className="package-shape" />
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
                </div> </div>
        </React.Fragment>

        )
    }
}

export default PriceThree