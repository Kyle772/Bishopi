import React, { Component } from 'react'
import SearchBar from '../SearchBar';


export class HeroThree extends Component {
    render() {
        var bg= require('../../assets/img/hero-bg.svg');
        var {BigTitle, SubTitle, Achievement1, Achievement2, imgUrl} = this.props;


        return (
            <section className="hero-wrapper">
                <div className="single-hero d-flex align-items-center">
                    <div className="hero-bg" style ={ { backgroundImage: "url("+bg+")" } }></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-0  col-md-10 offset-md-1 col-12">
                                <div className="hero-contents text-white text-center text-xl-left">
                                    <h2>{BigTitle}</h2>
                                    <p>{SubTitle}</p>
                                </div>
                                <div className="fullwidth">
                                    <SearchBar/>
                                </div>
                                <div className="achievement-list text-center text-xl-left d-none d-sm-block">
                                    <ul>
                                        <li><span><i className="far fa-check-circle" /></span>{Achievement1}</li>
                                        <li><span><i className="far fa-check-circle" /></span>{Achievement2}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 d-none d-xl-block ">
                                <div className="hero-v3-img pl-20 pr-20">
                                    <img src={require (`../../assets/img/${imgUrl}`) } alt="Klaud" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroThree
