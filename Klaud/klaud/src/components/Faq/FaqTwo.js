import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class FaqTwo extends Component {
    render() {
        var FaqData = this.props.FaqData;

        return (
            <section className="faq-wrap section-padding" id="faq">
                <div className="container">

                    <SectionTitle Title="Frequently asked questions"  Titlep="WHO? HOW? WHY? To get answers for more questions, visit our documentation or contact us page" />

                    <div className="row pt-10">

                    {
                        FaqData.faqItems.map(item=> {
                            return(
                            <div className="col-lg-12 col-12" key={item.id}>
                                <div className="single-faq-box" data-aos="fade-up" data-aos-duration={800}>
                                    <div className="faq-icon">
                                    <img src={require (`../../assets/img/services/${item.iconUrl}`) } alt="klaud" />
                                    </div>
                                    <div className="faq-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.ans}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }

                    </div>
                </div>
            </section>
        )
    }
}

export default FaqTwo
