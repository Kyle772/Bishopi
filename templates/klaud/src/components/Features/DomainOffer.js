import React, { Component } from 'react'
import SearchBar from '../SearchBar';

export class DomainOffer extends Component {
    render() {
        return (
            <div className="domain-search-wrap section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="domian-promo-main">
                                <SearchBar/>
                                
                                <div className="domain-name-price-wrap">
                                    <ul>
                                        <li><span>.com</span>$15, 12.99</li>
                                        <li><span>.net</span>$13, 12.99</li>
                                        <li><span>.tips</span>$13, 12.99</li>
                                        <li><span>.edu</span>$13, 12.99</li>
                                        <li><span>.info</span>$13, 12.99</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DomainOffer
