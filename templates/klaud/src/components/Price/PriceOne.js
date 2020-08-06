import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'


export class PriceOne extends Component {
    render() {

        return (
            <section className="price-wrap section-padding pt-0" id="price">
                <div className="container">
                
                    <SectionTitle Title="Choose the best hosting plan"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="tab-content">
                                <div id="month" className="tab-pane in active">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                            <div className="single-price-table" data-aos="fade-up" data-aos-delay={200} data-aos-duration={800}>
                                                <div className="package-name text-center">
                                                    <h3>Free Trial</h3>
                                                    <span>Build Website</span>
                                                </div>
                                                <div className="package-features-price">
                                                    <div className="price text-center">
                                                        <span>0.00</span>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />10GB Storage Space</li>
                                                        <li><i className="fal fa-check-circle" />50GB Bandwidth</li>
                                                        <li><i className="fal fa-check-circle" />10 Free Sub-Domains</li>
                                                        <li className="del"><i className="fal fa-times-circle" />100 E-mail Accounts</li>
                                                        <li className="del"><i className="fal fa-times-circle" />Control Panel &amp; FTP</li>
                                                        <li className="del"><i className="fal fa-times-circle" />Unlimited Support</li>
                                                    </ul>
                                                </div>
                                                <div className="package-btn">
                                                    <a href=".#">try now</a>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                            <div className="single-price-table" data-aos="fade-up" data-aos-delay={300} data-aos-duration={800}>
                                                <div className="package-name text-center">
                                                    <h3>Startup</h3>
                                                    <span>Build Website</span>
                                                </div>
                                                <div className="package-features-price">
                                                    <div className="price text-center">
                                                        <span>10.00</span>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />10GB Storage Space</li>
                                                        <li><i className="fal fa-check-circle" />50GB Bandwidth</li>
                                                        <li><i className="fal fa-check-circle" />10 Free Sub-Domains</li>
                                                        <li><i className="fal fa-check-circle" />100 E-mail Accounts</li>
                                                        <li className="del"><i className="fal fa-times-circle" />Control Panel &amp; FTP</li>
                                                        <li className="del"><i className="fal fa-times-circle" />Unlimited Support</li>
                                                    </ul>
                                                </div>
                                                <div className="package-btn">
                                                    <a href=".#">try now</a>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                            <div className="single-price-table active" data-aos="fade-up" data-aos-delay={300} data-aos-duration={800}>
                                                <div className="package-name text-center">
                                                    <h3>Popular</h3>
                                                    <span>Build Website</span>
                                                </div>
                                                <div className="package-features-price">
                                                    <div className="price text-center">
                                                        <span>29.00</span>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />10GB Storage Space</li>
                                                        <li><i className="fal fa-check-circle" />50GB Bandwidth</li>
                                                        <li><i className="fal fa-check-circle" />10 Free Sub-Domains</li>
                                                        <li><i className="fal fa-check-circle" />100 E-mail Accounts</li>
                                                        <li><i className="fal fa-check-circle" />Control Panel &amp; FTP</li>
                                                        <li className="del"><i className="fal fa-times-circle" />Unlimited Support</li>
                                                    </ul>
                                                </div>
                                                <div className="package-btn">
                                                    <a href=".#">try now</a>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                            <div className="single-price-table" data-aos="fade-up" data-aos-delay={400} data-aos-duration={800}>
                                                <div className="package-name text-center">
                                                    <h3>Premium</h3>
                                                    <span>Build Website</span>
                                                </div>
                                                <div className="package-features-price">
                                                    <div className="price text-center">
                                                        <span>49.00</span>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />10GB Storage Space</li>
                                                        <li><i className="fal fa-check-circle" />50GB Bandwidth</li>
                                                        <li><i className="fal fa-check-circle" />10 Free Sub-Domains</li>
                                                        <li><i className="fal fa-check-circle" />100 E-mail Accounts</li>
                                                        <li><i className="fal fa-check-circle" />Control Panel &amp; FTP</li>
                                                        <li><i className="fal fa-check-circle" />Unlimited Support</li>
                                                    </ul>
                                                </div>
                                                <div className="package-btn">
                                                    <a href=".#">try now</a>
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

export default PriceOne
