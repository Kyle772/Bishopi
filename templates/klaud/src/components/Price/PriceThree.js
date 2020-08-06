import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'


class PriceThree extends Component {

    render() {
        var bg= require('../../assets/img/p1.svg');
        var bg2= require('../../assets/img/p2.svg');
        var bg3= require('../../assets/img/p3.svg');

        return (
            <section className="package-items-wrap section-padding pt-0 mbm-20" id="price">
                <div className="container">
                    
                <SectionTitle Title="Choose The Best Hosting Plan"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />  

                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="tab-content">
                                <div id="month" className="tab-pane in active">
                                    <div className="row">
                                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                                            <div className="single-package" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="package-shape" style ={ { backgroundImage: "url("+bg+")" } } />
                                                <div className="package-name text-center">
                                                    <h3>Free Trial</h3>
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
                                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                                            <div className="single-package active">
                                                <div className="package-shape" style ={ { backgroundImage: "url("+bg2+")" } } />
                                                <div className="package-name text-center">
                                                    <h3>Startup</h3>
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
                                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                                            <div className="single-package" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="package-shape" style ={ { backgroundImage: "url("+bg3+")" } } />
                                                <div className="package-name text-center">
                                                    <h3>Premium</h3>
                                                </div>
                                                <div className="package-features-price">
                                                    <div className="price text-center">
                                                        <span>89.00</span>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fal fa-check-circle" />10GB Storage Space</li>
                                                        <li><i className="fal fa-check-circle" />50GB Bandwidth</li>
                                                        <li><i className="fal fa-check-circle" />10 Free Sub-Domains</li>
                                                        <li><i className="fal fa-check-circle" />100 E-mail Accounts</li>
                                                        <li><i className="fal fa-check-circle" />Control Panel &amp; FTP</li>
                                                        <li><i className="fal fa-times-circle" />Unlimited Support</li>
                                                    </ul>
                                                </div>
                                                <div className="package-btn price-btn3">
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

export default PriceThree
