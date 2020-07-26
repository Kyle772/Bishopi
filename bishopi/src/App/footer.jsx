
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
        <footer className="">
        <div className="container">
            <div className="col col-3">
                <h4>Bishopi</h4>
                <Router>
                <Link to="/about" className="button">About</Link>
                        <Link to="/domains" className="button">Domains</Link>
                        <Link to="/auctions" className="button">Auctions</Link>
                        <Link to="/pricing" className="button">Pricing</Link>
                        <Link to="/features" className="button">Features</Link>
                        <Link to="/support" className="button">Support</Link>
                </Router>
            </div>
            <div className="col col-3">
                <h4>Company</h4>
            </div>
            <div className="col col-3">
                <h4>Support</h4>
            </div>
            <div className="col col-3">
                <h4>Social</h4>
            </div>
        </div>
        </footer>
      </React.Fragment>
    }
}

export default Header;