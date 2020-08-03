
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import Hero from '../../Klaud/Hero/HeroThree.js';
import Services from '../../Klaud/Services/ServiceThree.js';
import SectionTitle from '../../Klaud/SectionTitle.js';
import ServiceData from '../../Klaud/Services/ServiceData';
import PriceThree from '../../Klaud/Price/PriceThree.js';
import WhyUs from '../../Klaud/WhyUs.js';
import ContentBlock from '../../Klaud/ContentBlock.js';
import './Home.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }

    render() {
        return <React.Fragment>
            <Hero BigTitle="Domain appraisal made easy"
                SubTitle="Up to 50% Off Domain and Hosting, Starting from $ 2.50/Month. Free SSL Certificate, Money Back Gurantee."
                Achievement1=""
                Achievement2=""
                imgUrl=""
                inlineResults={true}
            />
            <section id="service">
                <div className="container">
                    <SectionTitle HideSpan={true} Title="The latest hosting server technology"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />
                    <Services ServiceData={ServiceData} />
                </div>
            </section>
            <section id="standalone-title">
                <div className="container">
                    <SectionTitle Title="Access exclusive features with a free account" 
                    Titlep="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio fugiat maiores!"/>
                    <a href="#" class="theme-btn ml-auto mr-auto">Create a FREE account</a>
                    <p className="text-center">No credit card required</p>
                </div>
            </section>
            <section id="mainfeatures" class="blue">
                <div className="container">
                    <SectionTitle Title="Main Features" 
                    Titlep="Here we can introduce the wide range of features that the site offers for managing domains."/>
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
            </section>
            <section id="pricing">
                <div className="container">
                    <PriceThree />
                </div>
            </section>
            <section id="whyus" >
                <div className="container">
                    <WhyUs />
                    <ContentBlock />
                </div>
            </section>
        </React.Fragment>
    }
}

export default withRouter(HomePage);