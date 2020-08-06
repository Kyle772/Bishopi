import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import logo from '../Assets/images/logo.png';


class ContentBlock extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="blurbs">
                    <SectionTitle Title="Exceptional services" Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

                    <div className="row ">
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
                        <div className="col-xl-5 col-lg-6 col-sm-12 col-12 text-center m-auto">
                            <div className="content-block" data-aos="fade-right" data-aos-duration={1200}>
                                <i className="fad fa-user-headset fa-invert"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">

                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">Cloud Hosting</span>
                                <h2>Complete cloud hosting Solution</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-sm-12 col-12 text-center m-auto">
                            <div className="content-block" data-aos="fade-right" data-aos-duration={1200}>
                                <i className="fad fa-clouds fa-invert"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ContentBlock