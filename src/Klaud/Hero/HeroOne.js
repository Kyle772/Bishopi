import React, { Component } from 'react';
import SearchBar from '../SearchBar';



class HeroOne extends Component {
    render() {
        var {BigTitle, SubTitle} = this.props;

        return (
        <section className="hero-wrapper">
            <div className="single-hero-slide">
                <div className="hero-shape-wrap">
                    <img src={require( "../../assets/img/shape/9.png")} className="shape shape1" alt="" />
                    <img src={require( "../../assets/img/shape/10.png")} className="shape shape2" alt="" />
                    <img src={require( "../../assets/img/shape/11.png")} className="shape shape3" alt="" />
                    <img src={require( "../../assets/img/shape/12.png")} className="shape shape4" alt="" />
                    <img src={require( "../../assets/img/shape/13.png")} className="shape shape5" alt="" />
                    <img src={require( "../../assets/img/shape/14.png")} className="shape shape6" alt="" />
                    <img src={require( "../../assets/img/shape/15.png")} className="shape shape7" alt="" />
                    <img src={require( "../../assets/img/shape/16.png")} className="shape shape8" alt="" />
                    <img src={require( "../../assets/img/shape/17.png")} className="shape shape9" alt="" />
                    <img src={require( "../../assets/img/shape/17.png")} className="shape shape10" alt="" />
                    <img src={require( "../../assets/img/shape/17.png")} className="shape shape11" alt="" />
                </div>
                <div className="slide-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <linearGradient id="PSgrad_0" x1="0%" x2="70.711%" y1="0%" y2="70.711%">
                                <stop offset="0%" stopColor="rgb(21,61,87)" stopOpacity={1} />
                                <stop offset="100%" stopColor="rgb(43,34,81)" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="none" d="M-0.000,0.001 L1920.000,-0.000 L1920.000,680.000 C1920.000,680.000 1439.999,830.000 959.998,830.000 C479.998,830.000 -0.000,680.000 -0.000,680.000 L-0.000,0.001 Z" />
                        <path fill="url(#PSgrad_0)" d="M-0.000,0.001 L1920.000,-0.000 L1920.000,680.000 C1920.000,680.000 1439.999,830.000 959.998,830.000 C479.998,830.000 -0.000,680.000 -0.000,680.000 L-0.000,0.001 Z" />
                    </svg>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 text-center">
                            <div className="hero-content">
                                <h1 className="fs-lg mb-20">{BigTitle}</h1>
                                <p>{SubTitle}</p>
                                <SearchBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default HeroOne
