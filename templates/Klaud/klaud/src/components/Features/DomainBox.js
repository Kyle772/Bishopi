import React, { Component } from 'react'

class DomainBox extends Component {

    render() {
        var DomainData = this.props.DomainData;
        var {classAdd} = this.props;

        return (
            <section className={`featured-domain-offer  ${classAdd ==="yes" ? 'feature-v3 section-padding' : '' }`} id="feature">
                <div className="container">
                    <div className="row">
                    {
                        DomainData.domainItem.map(item=> {
                            return(
                                <div className="col-xl-2 col-lg-4 col-sm-6 col-12" key={item.id}>
                                    <div className="single-domain-name text-center">
                                        <h3>{item.domain}</h3>
                                        <span>{item.price}</span>
                                        <div className="domain-icon">
                                            <img src={require (`../../assets/img/domain${item.id}.png`) } alt="klaud" />
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

export default DomainBox
