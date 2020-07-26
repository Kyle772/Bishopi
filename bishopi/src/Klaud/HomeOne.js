import React, {Component} from 'react';
import HeroOne from './Hero/HeroOne';
import DomainBox from './Features/DomainBox';
import ServiceOne from './Services/ServiceOne';
import PriceOne from './Price/PriceOne';
import Map from './Map';
import ContentBlock from './ContentBlock';
import FaqOne from './Faq/FaqOne';
import ContactOne from './Contact/ContactOne';
import DomainData from './Features/DomainData';
import ServiceData from './Services/ServiceData';
import FaqData from './Faq/FaqData';
import TestimonialData from './Testimonial/TestimonialData';
import Testimonial from './Testimonial/Testimonial';
import Team from './Team';
import TeamData from './Data/TeamData';

class HomeOne extends Component {

    render() {
        return (
            <React.Fragment>
                <HeroOne BigTitle="Find your best domain name and create a Site" SubTitle="Up to 50% Off Domain and Hosting, Starting from $ 2.50/Month." />
                <DomainBox DomainData={DomainData} />
                <ServiceOne ServiceData={ServiceData} />
                <PriceOne/>
                <Map/>
                <ContentBlock/>
                <Testimonial TestimonialData={TestimonialData} />
                <FaqOne FaqData={FaqData} />
                <Team TeamData={TeamData} />
                <ContactOne/>
            </React.Fragment>

        )
    }
}

export default HomeOne
