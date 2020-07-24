import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/css/bootstrap.min.css';
import './assets/main.css';
import './assets/css/slick-theme.css';
import './assets/css/slick.css';
import './assets/css/aos.css';
import './assets/css/fontawesome.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
