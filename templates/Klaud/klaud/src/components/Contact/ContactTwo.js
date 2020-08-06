import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'
import { Gmap } from '../Gmap';

class ContactTwo extends Component {
    render() {
        return (
            <section className="contact-us-wrap section-padding contact-v3">
                <div className="container">

                <SectionTitle Title="Drop us as a message"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />  

                    <div className="row" id="contact">
                        <div className="col-md-12 col-lg-6 col-12">
                            <div className="form-wrap">
                                <form action=".#" className="row" id="contact-form" method="POST">
                                    <div className="col-12">
                                        <div className="single-input">
                                            <input type="text" id="fname" name="fullname" placeholder="Full name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <input type="text" id="email" name="email" placeholder="Your mail" />
                                        </div>
                                        <div className="single-input">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <textarea name="message" id="message" placeholder="message" defaultValue={ ""} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 mt-40">
                                        <button type="submit" className="theme-btn f3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 offset-lg-1 col-12 get-contact text-white">
                            <h4>Get Instand Reply</h4>
                            <div className="row">
                                <div className="single-contact-info col-sm-6 col-12">
                                    <div className="contact-icon">
                                        <i className="far fa-envelope-open-text" />
                                    </div>
                                    <div className="contact-info">
                                        <p>hello@klaud.com</p>
                                        <p>klaud@gmail.com</p>
                                    </div>
                                </div> {/* /.single-contact-info */}
                                <div className="single-contact-info col-sm-6 col-12">
                                    <div className="contact-icon">
                                        <i className="fal fa-headphones-alt" />
                                    </div>
                                    <div className="contact-info">
                                        <p>714-203-7976</p>
                                        <p>413-223-1643</p>
                                    </div>
                                </div> {/* /.single-contact-info */}
                            </div>
                            <div className="google-map mt-20">
                                <div id="map">
                                    <Gmap/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactTwo
