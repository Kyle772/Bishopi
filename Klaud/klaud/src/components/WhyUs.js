import React, { Component } from 'react'
import SectionTitle from './SectionTitle';

export class WhyUs extends Component {
    render() {
        return (
            <section className="why-us-wrap section-padding text-white">
                <div className="container">

                <SectionTitle Title="Why they choose Klaud"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

                    <div className="row mt-40">
                        <div className="col-xl-4 col-lg-4 col-sm-12">
                            <div className="special-fetaured-list right-icon">
                                <div className="single-special-feature">
                                    <div className="special-icon">
                                        <img src={require ("../assets/img/headphone.svg") } alt="" />
                                    </div>
                                    <div className="sf-text">
                                        <span>Online Support</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="single-special-feature">
                                    <div className="special-icon s2">
                                        <img src={require ("../assets/img/cloud.svg") } alt="" />
                                    </div>
                                    <div className="sf-text">
                                        <span>Cloud Hosting</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="single-special-feature">
                                    <div className="special-icon s3">
                                        <img src={require ("../assets/img/dhost.svg") } alt="" />
                                    </div>
                                    <div className="sf-text">
                                        <span>Dedicated hosting</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-12">
                            <div className="sepcail-featured-img">
                                <img src={require ("../assets/img/mainserver.png") } alt="" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-12">
                            <div className="special-fetaured-list left-icon">
                                <div className="single-special-feature">
                                    <div className="special-icon s4">
                                        <img src={require ("../assets/img/lock.png") } alt="" />
                                    </div>
                                    <div className="sf-text">
                                        <span>Privacy Protected</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="single-special-feature">
                                    <div className="special-icon s5">
                                        <img src={require ("../assets/img/network.svg") } alt="" />
                                    </div>
                                    <div className="sf-text">
                                        <span>Multiple Network</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="single-special-feature">
                                    <div className="special-icon s6">
                                        <img src={require ("../assets/img/fast.png") } alt="" />
                                    </div>
                                    <div className="sf-text">
                                        <span>Fast performance</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

export default WhyUs
