import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'


class ContactOne extends Component {
    render() {
        return (
            <section className="contact-us-wrap section-padding" id="contact">
                <div className="contact-shape-wrap">
                    <img src={require ("../../assets/img/shape/1.png") } className="shape shape1" alt="" />
                    <img src={require ("../../assets/img/shape/2.png") } className="shape shape2" alt="" />
                    <img src={require ("../../assets/img/shape/3.png") } className="shape shape3" alt="" />
                    <img src={require ("../../assets/img/shape/4.png") } className="shape shape4" alt="" />
                    <img src={require ("../../assets/img/shape/5.png") } className="shape shape5" alt="" />
                    <img src={require ("../../assets/img/shape/6.png") } className="shape shape6" alt="" />
                    <img src={require ("../../assets/img/shape/7.png") } className="shape shape7" alt="" />
                    <img src={require ("../../assets/img/shape/8.png") } className="shape shape8" alt="" />
                    <img src={require ("../../assets/img/shape/1.png") } className="shape shape9" alt="" />
                    <img src={require ("../../assets/img/shape/2.png") } className="shape shape10"  alt="" />
                    <img src={require ("../../assets/img/shape/3.png") } className="shape shape11"  alt="" />
                    <img src={require ("../../assets/img/shape/4.png") } className="shape shape12"  alt="" />
                    <img src={require ("../../assets/img/shape/5.png") } className="shape shape13"  alt="" />
                    <img src={require ("../../assets/img/shape/6.png") } className="shape shape14"  alt="" />
                    <img src={require ("../../assets/img/shape/7.png") } className="shape shape15"  alt="" />
                    <img src={require ("../../assets/img/shape/8.png") } className="shape shape16"  alt="" />
                </div>
                <div className="container">
                    
                    <SectionTitle Title="Drop us as a message"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    
                    <div className="form-wrap">
                        <form action="mail.php" className="row" id="contact-form" method="POST">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="single-input">
                                    <label htmlFor="fname">First name (required)</label>
                                    <input type="text" id="fname" name="fname" placeholder="first name" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="single-input">
                                    <label htmlFor="lname">Last name (required)</label>
                                    <input type="text" id="lname" name="lname" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="single-input">
                                    <label htmlFor="email">Your email (required)</label>
                                    <input type="text" id="email" name="email" placeholder="Your mail" />
                                </div>
                                <div className="single-input">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="single-input">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder="message" defaultValue={ ""} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-12 text-center mt-40">
                                <button type="submit" className="theme-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactOne
