
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation, 
    withRouter 
} from "react-router-dom";
import logo from '../Assets/images/Bishopi_blue_logo.png';
import './App.css';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () { return <React.Fragment>
        <header className="">
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
        </header>
      </React.Fragment>
    }
}

export default Header;