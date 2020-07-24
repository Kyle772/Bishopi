import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import $ from 'jquery';

export class FaqThree extends Component {


    componentDidMount() {
            
        $('.card-header .btn').on('click', function(){
            $(".accordion-wrap .card").not($(this).closest('.card')).removeClass('cbg');
            $(this).closest('.card').toggleClass('cbg');
        });

    }

    render() {
        var FaqData = this.props.FaqData;

        return (
            <section className="faq-wrap section-padding" id="faq">
                <div className="container">

            <SectionTitle Title="Frequently asked questions"  Titlep="WHO? HOW? WHY? To get answers for more questions, visit our documentation or contact us page" />

                    <div className="row">
                        <div className="col-md-12 col-md-12">
                            <div className="accordion-wrap" id="accordion">
                                {
                                    FaqData.faqItems.map( (item, index) => {
                                        
                                        return(
                                            
                                            <div className={`card ${index === 0 ? 'cbg' : '' }`} key={item.id}>
                                                 <span />
                                                <div className="card-header" id={`heading${item.id}`}>
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${item.id}`} aria-expanded="true">{item.title}</button>
                                                    </h2> 
                                                </div>
                                                <div id={`collapse${item.id}`} className={`collapse ${index === 0 ? 'show' : '' }`} data-parent="#accordion">
                                                <div className="card-body">{item.ans}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FaqThree
