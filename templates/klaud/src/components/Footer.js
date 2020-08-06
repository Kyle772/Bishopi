import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {

    render() { 
        var FooterData = this.props.FooterData;

        return (
            <footer className="footer-wrap footer-two pb-80">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="site-info-widget single-footer-wid">
                                    {
                                        FooterData.siteInfo.map(site=> {
                                            return(
                                            <div className="footer-logo" key={site.id}>
                                                <Link to="/"><img src={require ("../assets/img/"+site.image) } alt="klaud" /></Link>
                                                <p>{site.aboutText}</p>
                                            </div> 
                                            )
                                        })
                                    }

                                    <div className="social-pages">
                                    {
                                        FooterData.socialIcon.map(item=> {
                                            return(
                                                <a href={item.url} key={item.id}><i className={item.icon} /></a>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>

                            {
                                FooterData.singleWidget.map(widget=> {
                                    return(
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={widget.id}>
                                        <div className="single-footer-wid">
                                            <div className="foo-wid-title">
                                                <h3 key={widget.id}>{widget.title}</h3>
                                            </div>
                                            <ul>
                                            {
                                                widget.menuItems.map(item =>{
                                                    return(
                                                        <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
                                                    )
                                                })
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div> 
                <div className="footer-bottom mt-80">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-md-6 col-12">
                                <div className="copyright-info">
                                    <span>{FooterData.copyright}</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 text-md-right">
                                <div className="payment-support">
                                    <ul>
                                        {
                                            FooterData.paymentSupport.map(item =>{
                                                return(
                                                    <li key={item.id}><i className={item.icon} /></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
