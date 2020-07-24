import React, { Component } from 'react'
import SectionTitle from './SectionTitle'


class ContentBlock extends Component {
    render() {
        return (
            <section className="content-block-wrap section-padding pb-130">
                <div className="container">
                    
                <SectionTitle Title="Why they choose Klaud Hosting"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />  

                    <div className="row">
                        <div className="col-xl-5 col-lg-6  col-sm-12 col-12">
                            <div className="content-block" data-aos="fade-right" data-aos-duration={1200}>
                                <span className="top-title">Online Support</span>
                                <h2>24/7 online<br />Customer support</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 2010.</p>
                                <ul>
                                    <li>typesetting industry. Lorem Ipsum has been the industry's.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>typesetting industry. Lorem Ipsum has been</li>
                                    <li>typesetting industry. Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-featured-img" data-aos="fade-left" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img1.jpg") } alt="klaud" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">Cloud Hosting</span>
                                <h2>Complete cloud hosting Solution</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's of the printing and typesetting industry.</p>
                                <a href=".#" className="theme-btn">Get the service</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img2.jpg") } alt="klaud" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-up" data-aos-duration={1200}>
                                <span className="top-title">Dedicated Hosting</span>
                                <h2>We are provide dedicated Hosting</h2>
                                <p>Lorem Ipsum is simple typesetting industry. Lorem has been the industry's standard dummy text ever.</p>
                                <div className="features-promo">
                                    <div className="single-fp">
                                        <div className="fp-icon">
                                            <img src={require ("../assets/img/cludeicon.png") } alt="" />
                                        </div>
                                        <div className="fp-text">
                                            <h4>Datacenter-Powered Reliability</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                                        </div>
                                    </div>
                                    <div className="single-fp">
                                        <div className="fp-icon">
                                            <img src={require ("../assets/img/data.png") } alt="" />
                                        </div>
                                        <div className="fp-text">
                                            <h4>Server Level Choice</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                                        </div>
                                    </div>
                                    <div className="single-fp">
                                        <div className="fp-icon">
                                            <img src={require ("../assets/img/cludeicon.png") } alt="" />
                                        </div>
                                        <div className="fp-text">
                                            <h4>Lorem Ipsum is simply</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6  offset-xl-1 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-up" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img3.jpg") } alt="klaud" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">Privacy Protected</span>
                                <h2>Stay protected <br />Advanced firewall</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 2010 industry. Lorem Ipsum has been the industry's standard</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img4.jpg") } alt="klaud" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentBlock
