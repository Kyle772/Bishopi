import React, { Component } from 'react'
import Slider from 'react-slick';

export class HeroTwo extends Component {
    render() {


        const settings = {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
        };

        return (
            <section className="hero-slider-wrap">
                <Slider className="hero-slider-active" {...settings}>
                    <div className="single-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-10 col-12 pr-0">
                                    <div className="single-slide-content slide1 text-white">
                                        <span>99% offer this month</span>
                                        <h1>Create a beautiful website Start a free.</h1>
                                        <p>Your all in one solution to grow online. Start a free trial to create a beautiful website, buy a domain name, fast hosting, online marketing and award-winning 24/7.</p>
                                        <a href=".#" className="theme-btn">Get started today</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block col-12">
                                    <div className="single-slide-img">
                                            <img src={require ('../../assets/img/slider1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-10 col-12 pr-0">
                                    <div className="single-slide-content slide2 text-white">
                                        <span>85% offer this month</span>
                                        <h1>Make your idea real with a website.</h1>
                                        <p>Because we know that even the best technology is only as good as the people behind it. That’s why we offer expert, 24/7 phone support, plus a lot more.</p>
                                        <a href=".#" className="theme-btn">Start for Now</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block col-12">
                                    <div className="single-slide-img">
                                    <img src={require ('../../assets/img/slider2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="single-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-10 col-12 pr-0">
                                    <div className="single-slide-content slide3 text-white">
                                        <span>99% offer this month</span>
                                        <h1>Create a beautiful website Start a free.</h1>
                                        <p>Your all in one solution to grow online. Start a free trial to create a beautiful website, buy a domain name, fast hosting, online marketing and award-winning 24/7.</p>
                                        <a href=".#" className="theme-btn">Get started today</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block col-12">
                                    <div className="single-slide-img">
                                    <img src={require ('../../assets/img/slider1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>            
        )
    }
}

export default HeroTwo
