import React, { Component } from 'react'
import SectionTitle from './SectionTitle';

export class WhyUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <SectionTitle Title="Why choose Bishopi" Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <div className="col">
                        <div className="special-featured-list center-icon">
                            <div className="single-special-feature">
                                <div className="special-icon">
                                    <i className="fal fa-rocket" />
                                </div>
                                <div className="sf-text">
                                    <span>Online Support</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="single-special-feature">
                                <div className="special-icon s2">
                                    <i className="fal fa-rocket" />
                                </div>
                                <div className="sf-text">
                                    <span>Cloud Hosting</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="single-special-feature">
                                <div className="special-icon s3">
                                    <i className="fal fa-rocket" />
                                </div>
                                <div className="sf-text">
                                    <span>Dedicated hosting</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default WhyUs