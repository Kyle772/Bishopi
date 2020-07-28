
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

    comment() {/* <header className="">
  <div className="container">
      <img className="logo" src={logo}/>
      <Router>
          <div className="buttonCon">
              <Link to="/about" className="button">About</Link>
              <Link to="/domains" className="button">Domains</Link>
              <Link to="/auctions" className="button">Auctions</Link>
              <Link to="/pricing" className="button">Pricing</Link>
              <Link to="/features" className="button">Features</Link>
              <Link to="/support" className="button">Support</Link>
          </div>
          <div className="ctaCon">
              <Link to="/login" className="button cta">Login</Link>
              <Link to="/signup" className="button cta">Signup</Link>
          </div>
      </Router>
  </div>
</header> */}

    componentDidMount() {
        $(window).scroll(function () {
            var Width = $(document).width();
            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });
    }

    render() {
        return <React.Fragment>
            <header className="header-wraper">
                <div className="main-menu">
                    <div className="container">
                        <Router>
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
                                            <Link to="/about" className="button">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/domains" className="button">Domains</Link>
                                        </li>
                                        <li>
                                            <Link to="/auctions" className="button">Auctions</Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing" className="button">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/features" className="button">Features</Link>
                                        </li>
                                        <li className="mr-auto">
                                            <Link to="/support" className="button">Support</Link>
                                        </li>
                                        <li className="button cta">
                                            <Link to="/login" className="button">Login</Link>
                                        </li>
                                        <li className="button cta">
                                            <Link to="/signup" className="button">Sign up</Link>
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
                                        <Link to="/about" className="button">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/domains" className="button">Domains</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/auctions" className="button">Auctions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/pricing" className="button">Pricing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/features" className="button">Features</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/support" className="button">Support</Link>
                                    </li>
                                    <li className="button cta">
                                        <Link to="/login" className="button">Login</Link>
                                        <Link to="/signup" className="button">Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </Router>
                    </div>
                </div>
            </header>
        </React.Fragment>
    }
}

export default Header;