import React, { Component } from 'react'
import { Link as PageLink } from 'react-router-dom';
import { Link } from "react-scroll";
import $ from 'jquery';

export class Navbar extends Component {

    componentDidMount() {

        $(window).scroll(function(){
        var Width = $(document).width();

            if($("body").scrollTop() > 100 || $("html").scrollTop() > 100 ) {
            if (Width > 767 ) {
                $("header").addClass("sticky");
            }
            } else {
                $("header").removeClass("sticky");
            }
        });
        

    }



    render() {
        
        return (
        <header className="header-wraper transparent-menu">
            <div className="main-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-2 d-flex col-6 col-sm-4">
                            <PageLink className="navbar-brand logo" to="/">
                                <img src={require( "../assets/img/logo.png")} alt="Klaud" />
                            </PageLink>
                        </div>
                        <div className="col-xl-7 col-lg-7 offset-xl-1 col-md-7 col-7 pr-0 d-none d-lg-block text-lg-right">
                            <nav className="menu-1">
                                <ul className="menu-items">
                                    <li>
                                        <PageLink to="/">home</PageLink>
                                        <ul className="submenu">
                                            <li>
                                                <PageLink to="/">Home 1</PageLink>
                                            </li>
                                            <li>
                                                <PageLink to="/HomeTwo">Home 2</PageLink>
                                            </li>
                                            <li>
                                                <PageLink to="/HomeThree">Home 3</PageLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link activeClass="active" to="feature" spy={true} smooth={true} offset={-70} duration={ 500}> Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" to="price" spy={true} smooth={true} offset={-70} duration={ 500}> Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" to="service" spy={true} smooth={true} offset={-70} duration={ 500}>Services</Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-70} duration={ 500}> FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" to="testimonial" spy={true} smooth={true} offset={-70} duration={ 500}> Testimonial
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={ 500}> Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-4 col-md-4 d-none d-sm-block text-right">
                            <div className="account">
                                <Link to=".#" className="theme-btn sign">Sing up <img src={require(`../assets/img/sign.png`)} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-6 d-block d-lg-none">
                            <nav className="navbar navbar-expand-lg navbar-light mobile-nav">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                    <span className="fal fa-bars" />
                                </button>
                                
                            </nav>
                        </div>
                        <div className="collapse navbar-collapse mobile-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <PageLink className="nav-link" to="/">Home</PageLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to=".#" id="navbarDropdown" role="button" data-toggle="dropdown">Dropdown</Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to=".#">Action</Link>
                                                <Link className="dropdown-item" to=".#">Another action</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=".#">Features</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=".#">Price</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=".#">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=".#">Faq</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=".#">Testimonial</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=".#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                    </div>
                </div>
            </div>
        </header>            
        )
    }
}

export default Navbar
