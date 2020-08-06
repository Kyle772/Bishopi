
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import './PriceComp.scss';

class PriceComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }

    render() {
        let { Title, Titlep } = this.props;
        if (!Title) { Title = "Pricing Plan" }
        if (!Titlep) { Titlep = "Choose the plan that's right for your growing team!" }

        return <React.Fragment>
            <SectionTitle HideSpan={true} Title={Title} Titlep={Titlep} />
            <div className="comparison">
                <div className="left-col">
                    <div className="package-control top">
                        <h3>Compare plans</h3>
                        <ul className="nav nav-pills">
                            <li className="">
                                <a data-toggle="pill" href="#monthComp" className="active">Monthly</a>
                            </li>
                            <li className="">
                                <a data-toggle="pill" href="#yearComp" className="">Yearly</a>
                            </li>
                            <span className="toggle-active"></span>
                        </ul>
                    </div>
                    <div className="feature-list">
                        <ul>
                            <li>Feature One</li>
                            <li>Feature Two</li>
                            <li>Feature Three</li>
                            <li>Feature Four</li>
                            <li>Feature Five</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content card-list">
                    <div id="monthComp" className="tab-pane in active">
                        <div className="row">
                            <div className="card">
                                <div className="top">
                                    <h4>Basic</h4>
                                    <h2>30</h2>
                                    <p>Per Month</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <h4>Optimum</h4>
                                    <h2>30</h2>
                                    <p>Per Month</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <h4>Full</h4>
                                    <h2>30</h2>
                                    <p>Per Month</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <h4>Enterprise</h4>
                                    <h2>30</h2>
                                    <p>Per Month</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="yearComp" className="tab-pane in">
                        <div className="row">
                            <div className="card">
                                <div className="top">
                                    <h4>Basic</h4>
                                    <h2>30</h2>
                                    <p>Per Year</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <h4>Optimum</h4>
                                    <h2>30</h2>
                                    <p>Per Year</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><i className="far fa-horizontal-rule"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <h4>Full</h4>
                                    <h2>30</h2>
                                    <p>Per Year</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <h4>Enterprise</h4>
                                    <h2>30</h2>
                                    <p>Per Year</p>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><i className="far fa-check"></i></li>
                                        <li><button className="package-btn">Select Plan</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default withRouter(PriceComp);