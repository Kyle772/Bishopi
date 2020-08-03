import React, { Component } from 'react'
import SectionTitle from '../SectionTitle';
import './Contact.scss';

class ContactTwo extends Component {
    render() {
        return (
            <section className="contact-us-wrap section-padding contact-v3">

                <SectionTitle hideSpan={true} Title="Send us a message"  Titlep="Send us a message and we'll respond within 24 hours." />  

                    <div className="row" id="contact">
                        <div className="col-sm-12 col-lg-8">
                            <div className="form-wrap">
                                <form action=".#" className="row" id="contact-form" method="POST">
                                    <div className="col-6">
                                        <div className="single-input">
                                            <input type="text" id="fname" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="single-input">
                                            <input type="text" id="email" name="email" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" />
                                        </div>
                                        <div className="single-input">
                                            <textarea name="message" id="message" placeholder="message" defaultValue={ ""} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 mt-40">
                                        <button type="submit" className="theme-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                </div>
            </section>
        )
    }
}

export default ContactTwo