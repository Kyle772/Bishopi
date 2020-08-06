
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    withRouter
} from "react-router-dom";
import logo from '../Assets/images/logo.png';
import './App.css';
import { Link as PageLink } from 'react-router-dom';
import { Link } from "react-scroll";
import $ from 'jquery';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    

    componentDidMount() {
        $(window).scroll(function () {
            var Width = $(document).width();
            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                    $("header").addClass("sticky");
            } else {
                $("header").removeClass("sticky");
            }
        });
        $("header .nav-item a").on("click", function () {
            $(".navbar-toggler").click();
        })
        
    }

    render() {
        return <React.Fragment>
            <header className="header-wraper">
                <div className="main-menu">
                    <div className="container">
                        <PageLink className="navbar-brand logo" to="/">
                            <img className="logo" src={logo} />
                        </PageLink>
                        <div className="desktop-menu-con d-none d-lg-block text-lg-right">
                            <nav className="menu">
                                <ul className="menu-items">
                                    <li>
                                        <PageLink to="/">Home</PageLink>
                                    </li>
                                    <li>
                                        <PageLink to="/about" className="button">About</PageLink>
                                    </li>
                                    <li>
                                        <PageLink to="/domains" className="button">Domains</PageLink>
                                    </li>
                                    <li>
                                        <PageLink to="/auctions" className="button">Auctions</PageLink>
                                    </li>
                                    <li>
                                        <PageLink to="/pricing" className="button">Pricing</PageLink>
                                    </li>
                                    <li>
                                        <PageLink to="/features" className="button">Features</PageLink>
                                    </li>
                                    <li className="mr-auto">
                                        <PageLink to="/support" className="button">Support</PageLink>
                                    </li>
                                    <li className="button cta">
                                        <PageLink to="/login" className="button">Login</PageLink>
                                    </li>
                                    <li className="button cta">
                                        <PageLink to="/signup" className="button">Sign up</PageLink>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className="ml-auto d-block d-lg-none">
                            <nav className="navbar navbar-expand-lg navbar-light mobile-nav">
                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                    <span className="fal fa-bars" />
                                    <span className="fal fa-times" />
                                </button>

                            </nav>
                        </div>
                        <div className="collapse navbar-collapse mobile-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <PageLink to="/">Home</PageLink>
                                </li>
                                <li className="nav-item">
                                    <PageLink to="/about" className="button">About</PageLink>
                                </li>
                                <li className="nav-item">
                                    <PageLink to="/domains" className="button">Domains</PageLink>
                                </li>
                                <li className="nav-item">
                                    <PageLink to="/auctions" className="button">Auctions</PageLink>
                                </li>
                                <li className="nav-item">
                                    <PageLink to="/pricing" className="button">Pricing</PageLink>
                                </li>
                                <li className="nav-item">
                                    <PageLink to="/features" className="button">Features</PageLink>
                                </li>
                                <li className="nav-item">
                                    <PageLink to="/support" className="button">Support</PageLink>
                                </li>
                                <li className="nav-item button cta">
                                    <PageLink to="/login" className="button">Login</PageLink>
                                    <PageLink to="/signup" className="button">Sign up</PageLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    }
}

export default Header;