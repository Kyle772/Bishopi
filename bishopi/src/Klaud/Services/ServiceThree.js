import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class ServiceThree extends Component {
    render() {

        var ServiceData = this.props.ServiceData;

        return (
            <React.Fragment>
                <div className="row">
                    {
                        ServiceData.serviceBoxItem.map((item, index) => {
                            return (
                                index < 6 ?
                                    <div className="col-lg-4 col-md-6 col-12" key={item.id} >
                                        <div className="service-box-2 servicev3">
                                            <div className="service-icon">
                                                <i class={item.faIcon} alt="klaud"></i>
                                            </div>
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                    :
                                    ''
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ServiceThree