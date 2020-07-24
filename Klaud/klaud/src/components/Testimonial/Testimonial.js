import React, { Component } from 'react';
import Slider from 'react-slick';
import SectionTitle from '../SectionTitle'

class Testimonial extends Component {
    render() {
        var bg= require('../../assets/img/bgshape.svg');

        var TestimonialData = this.props.TestimonialData;

        const settings = {
            slidesToShow: 3,
            dots: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            centerPadding: '0px',
            autoplaySpeed: 3000,
            centerMode: true,
            responsive: [
              {
                breakpoint: 1191,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              
            ]
        };

        return (
            <section className="testimonail-wrap section-padding" id="testimonial">
                <div className="testimonial-bg" style ={ { backgroundImage: "url("+bg+")" } }>
                </div>
                <div className="container">

                <SectionTitle Title="Happy testimonials"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <Slider className="testimonial-list" {...settings}>
                            {
                                TestimonialData.reviewItem.map(item=> {
                                    return(
                                        <div className="single-testimonial" key={item.id}>
                                            <div className="client-img">
                                                <img src={require (`../../assets/img/client/${item.imgUrl}.jpg`) } alt="klaud" />
                                            </div>
                                            <div className="client-info">
                                                <h4>{item.cName}</h4>
                                                <p>{item.cPosition} at <span>{item.companyName}</span></p>
                                            </div>
                                            <p>{item.reviewText}</p>
                                        </div>
                                    )
                                })
                            }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial
