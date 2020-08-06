
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import "../Login/Login.scss";
import "./Signup.scss"

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }

    render() {
        return <React.Fragment>
            <section id="SignupForm">
                <div className="container">
                    <form>
                        <div className="col">
                            <h2>Sign Up</h2>
                            <div className="form-group">
                                <input type="text" placeholder="First Name *" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name *" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <div className="select"><select name="Country" className="select-hidden">
                                    <option value="Select Country">Country</option>
                                    <option value="Select Country2">Ukraine</option>
                                </select><div className="select-styled">Country</div><ul className="select-options"><li rel="Select Country">Country</li><li rel="Select Country2">Ukraine</li></ul></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input type="text" placeholder="City *" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="ZIP Code *" />
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="Address *" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Password *" />
                            </div>
                            <button>Create My Account</button>
                        </div>
                    </form>
                    <h3 className="text-center create">Have an account? <a href="/login">Sign In</a></h3>
                </div>
            </section>

        </React.Fragment>
    }
}

export default withRouter(SignupPage);