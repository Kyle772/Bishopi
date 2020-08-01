
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import "./Login.scss";

class LoginPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () {return <React.Fragment>
    <section id="LoginForm">
        <div className="container">
            <form className="">
                <h2>Login</h2>
                <div className="form-group">
                    <input type="text" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Password" />
                </div>
                <div className="form-group">
                    <a href="#">Forgot Password?</a>
                    <button>Login</button>
                </div>
            </form>
            <h3 className="text-center create">Dont have account? <a href="/signup">Create Account</a></h3>
        </div>
    </section>

  </React.Fragment>
    }
}

export default withRouter(LoginPage);