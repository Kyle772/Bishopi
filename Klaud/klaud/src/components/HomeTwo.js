import React, { Component } from 'react'
import HeroTwo from './Hero/HeroTwo';
import DomainOffer from './Features/DomainOffer';
import ServiceTwo from './Services/ServiceTwo';
import ServiceData from './Services/ServiceData';
import PriceTwo from './Price/PriceTwo';
import WhyUs from './WhyUs';
import FaqData from './Faq/FaqData';
import FaqTwo from './Faq/FaqTwo';
import Team from './Team';
import TeamData from './Data/TeamData';
import TestimonialData from './Testimonial/TestimonialData';
import Testimonial from './Testimonial/Testimonial';
import ContactOne from './Contact/ContactOne';

export class HomeTwo extends Component {
    render() {
        return (
          <React.Fragment>
                <HeroTwo/>
                <DomainOffer/>
                <ServiceTwo ServiceData={ServiceData} />
                <PriceTwo/>
                <WhyUs/>
                <FaqTwo FaqData={FaqData} />
                <Team TeamData={TeamData} />
                <Testimonial TestimonialData={TestimonialData} />
                <ContactOne/>
          </React.Fragment>
        )
    }
}

export default HomeTwo
