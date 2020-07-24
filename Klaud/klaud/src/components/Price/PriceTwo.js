import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';


export class PriceTwo extends Component {
    render() {
        return (
            <section className="price-wrap price-two section-padding" id="price">
                <div className="container">
                    
                <SectionTitle Title="Choose the best hosting plan"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

                    <div className="row mt-40">

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-price-box">
                                <div className="package-name text-center">
                                    <h3>Basic</h3>
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

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-price-box active">
                                <div className="package-name text-center">
                                    <h3>Comfort</h3>
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

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-price-box">
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
            </section>
        )
    }
}

export default PriceTwo
