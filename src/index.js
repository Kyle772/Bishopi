import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/main.css';
import App from './App';
import Header from './App/header';
import Footer from './App/footer';
import FooterData from './App/FooterData.jsx';
import * as serviceWorker from './serviceWorker';
import './Assets/css/bootstrap.min.css';
import './Assets/main.css';
import './Assets/css/slick-theme.css';
import './Assets/css/slick.css';
import './Assets/css/aos.css';
import './Assets/css/fontawesome.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
    <Router>
      <Header/>
      <App />
      <Footer FooterData={FooterData}/>
    </Router>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();