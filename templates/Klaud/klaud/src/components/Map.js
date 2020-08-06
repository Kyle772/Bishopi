import React, { Component } from 'react'
import SectionTitle from './SectionTitle'

class Map extends Component {   
    render() {
        return (
        <section className="map-wrap section-padding text-white d-none d-md-block">
            <div className="map-bg">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient id="mapcolor" x1="0%" x2="70.711%" y1="0%" y2="70.711%">
                            <stop offset="0%" stopColor="rgb(47,25,118)" stopOpacity={1} />
                            <stop offset="100%" stopColor="rgb(94,33,143)" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <path fillRule="evenodd" fill="url(#mapcolor)" d="M-0.000,150.000 C-0.000,150.000 479.997,-0.001 959.996,-0.001 C1439.998,0.001 1920.000,150.000 1920.000,150.000 L1920.000,1051.022 C1920.000,1051.022 1439.999,1051.022 959.998,1051.022 C479.998,1051.022 -0.000,1051.022 -0.000,1051.022 L-0.000,150.000 Z" />
                </svg>
            </div>
            <div className="container">

                <SectionTitle Title="Get our services from world wide"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />  

                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-12">
                        <div className="main-map mt-30">
                            <img src={require ("../assets/img/map.png")} alt="klaud" />
                            <div className="server-country-list">
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={50} data-aos-duration={800}>
                                    <p>Russia</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={100} data-aos-duration={800}>
                                    <p>London</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={150} data-aos-duration={800}>
                                    <p className="right">Washington</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={200} data-aos-duration={800}>
                                    <p>New York</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={250} data-aos-duration={800}>
                                    <p>Middle East</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={300} data-aos-duration={800}>
                                    <p>Sinngapore</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={350} data-aos-duration={800}>
                                    <p className="right">Brazil</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={400} data-aos-duration={800}>
                                    <p>Africa</p>
                                </div>
                                <div className="single-country" data-aos="zoom-in" data-aos-delay={450} data-aos-duration={800}>
                                    <p>Australia</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Map
