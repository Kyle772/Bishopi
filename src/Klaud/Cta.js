import React, { Component } from 'react'

class Cta extends Component {
    render() {
        var {CtaTitle, CtaDec, CtaBtnText, ctaLink} = this.props;
        return (
            <section className="cta-wrap section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 offset-lg-3 offset-md-1">
                            <div className="cta-content text-center" data-aos="zoom-in" data-aos-duration={1200}>
                                <h2>{CtaTitle}</h2>
                                <p>{CtaDec}</p>
                                <a href={ctaLink} className="theme-btn cta-btn">{CtaBtnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cta
