import React, { Component } from 'react'
import { Link as PageLink } from 'react-router-dom';
import './SectionTitle.scss';

class SectionTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var { Title, Titlep, ButtonText, ButtonLink } = this.props;
        return (
            <div className="section-title-container row">
                <div className="col-lg-8 col-md-10 col-12">
                    <div className="section-title text-center">
                        { !this.props.hideSpan ? <span /> : "" }
                        <h2>{Title}</h2>
                        <p>{Titlep}</p>
                        { ButtonText && ButtonLink ? <PageLink exact to={ButtonLink} className="theme-btn">{ButtonText}</PageLink> : ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTitle