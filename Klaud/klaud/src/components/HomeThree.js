import React, { Component } from 'react'
import HeroThree from './Hero/HeroThree'
import DomainBox from './Features/DomainBox';
import DomainData from './Features/DomainData';
import PriceThree from './Price/PriceThree';
import Team from './Team';
import TeamData from './Data/TeamData';
import TestimonialData from './Testimonial/TestimonialData';
import Testimonial from './Testimonial/Testimonial';
import ContactTwo from './Contact/ContactTwo';
import ContentBlock from './ContentBlock';
import ServiceThree from './Services/ServiceThree';
import ServiceData from './Services/ServiceData';
import FaqThree from './Faq/FaqThree';
import FaqData from './Faq/FaqData';


class HomeThree extends Component {
    render() {
        return (
            <React.Fragment>
                <HeroThree BigTitle="Find Your Perfect Name Today. Klaud Makes It Fast & Easy." SubTitle="Up to 50% Off Domain and Hosting, Starting from $ 2.50/Month. Free SSL Certificate, Money Back Gurantee." Achievement1="Big savings over other registrars." Achievement2="Award-winning 24/7 support" imgUrl="hero-3.png" />
                <DomainBox DomainData={DomainData} classAdd="yes" />
                <ServiceThree ServiceData={ServiceData} />
                <ContentBlock/>
                <PriceThree/>
                <Testimonial TestimonialData={TestimonialData} />
                <FaqThree FaqData={FaqData} />
                <Team TeamData={TeamData} />
                <ContactTwo/>
            </React.Fragment>
        )
    }
}

export default HomeThree
