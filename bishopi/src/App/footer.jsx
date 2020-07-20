
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
            <div class="col col-3">
                <h4>Bishopi</h4>
                <Router>
                    <Link className="button">About</Link>
                    <Link className="button">Domains</Link>
                    <Link className="button">Auctions</Link>
                    <Link className="button">Pricing</Link>
                    <Link className="button">Features</Link>
                    <Link className="button">Support</Link>
                </Router>
            </div>
            <div class="col col-3">
                <h4>Company</h4>
            </div>
            <div class="col col-3">
                <h4>Support</h4>
            </div>
            <div class="col col-3">
                <h4>Social</h4>
            </div>
        </div>
        </footer>
      </React.Fragment>
    }
}

export default Header;