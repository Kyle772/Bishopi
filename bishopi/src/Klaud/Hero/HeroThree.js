import React, { Component } from 'react'
import SearchBar from '../SearchBar';


export class HeroThree extends Component {
    render() {
        var { BigTitle, SubTitle, Achievement1, Achievement2, imgUrl, searchResultTarget, inlineResults } = this.props;
        let AchievementBlock;
        if (!searchResultTarget) {
            searchResultTarget = "searchResults";
        }
        if (Achievement1) {
            AchievementBlock = <div className="achievement-list text-center text-xl-left d-none d-sm-block">
                <ul>
                    <li><span><i className="far fa-check-circle" /></span>{Achievement1}</li>
                    <li><span><i className="far fa-check-circle" /></span>{Achievement2}</li>
                </ul>
            </div>
        }

        return (
            <React.Fragment>
                <section className="hero-wrapper">
                    <div className="single-hero d-flex align-items-center">
                        <div className="container hero-bg">
                            <div className="row align-items-center">
                                <div className="col-lg-8 offset-lg-2 col-xl-4 offset-xl-0  col-md-10 offset-md-1 col-12">
                                    {BigTitle ? <div className="hero-contents text-white text-center text-xl-left mb-40">
                                        <h2>{BigTitle}</h2>
                                        <p>{SubTitle}</p>
                                    </div> : ""}
                                    {AchievementBlock ? AchievementBlock : ""}
                                </div>
                                <div className="col-12 col-xl-8">
                                    <div className="hero-v3-img pl-20 pr-20">
                                        <div className="fullwidth">
                                            <SearchBar inlineResults={ this.props.inlineResults } resultTarget={ this.props.searchResultTarget } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default HeroThree