
import React, { Component } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {}
  
  render () { return <React.Fragment>
    <div className="container">
			<h2 className="text-center">Managed VPS Service</h2>
			<ul className="nav nav-tabs" role="tablist">
				<li className="active"><a href="#monthly" aria-controls="monthly" role="tab" data-toggle="tab">Billed monthly</a></li>
				<li><a href="#yearly" aria-controls="yearly" role="tab" data-toggle="tab">Billed yearly</a></li>
			</ul>
			<div className="tab-content">
				<div role="tabpanel" className="tab-pane active" id="monthly">
					<ul className="pricing-list">
						<li className="animated bounceInLeft delay-250 go">
							<div className="images"><img src="assets/images/basic-plan.svg" alt="basic-plan" /></div>
							<h5>Basic Plan</h5>
							<ul>
								<li>2GB RAM</li>
								<li>1 Cores</li>
								<li>2.5GHz per Core</li>
								<li>25GB SSD Storag</li>
								<li>50GB SAS Secondary</li>
								<li>1TB Bandwidth</li>
							</ul>
							<span><b>Price</b></span>
							<div className="price">80$<span>/month</span></div>
							<a href="sign-up.html" className="custom-btn">Get Started Now</a>
						</li>
						<li className="animated bounceInLeft delay-500 go">
							<div className="images"><img src="assets/images/star-plan.png" alt="star-plan" /></div>
							<h5>Premium Plan</h5>
							<ul>
								<li>2GB RAM</li>
								<li>1 Cores</li>
								<li>2.5GHz per Core</li>
								<li>25GB SSD Storag</li>
								<li>50GB SAS Secondary</li>
								<li>1TB Bandwidth</li>
							</ul>
							<span><b>Price</b></span>
							<div className="price">90$<span>/month</span></div>
							<a href="sign-up.html" className="custom-btn">Get Started Now</a>
						</li>
						<li className="animated bounceInLeft delay-750 go">
							<div className="images"><img src="assets/images/hosting.svg" alt="hosting" /></div>
							<h5>Reseller Plan</h5>
							<ul>
								<li>2GB RAM</li>
								<li>1 Cores</li>
								<li>2.5GHz per Core</li>
								<li>25GB SSD Storag</li>
								<li>50GB SAS Secondary</li>
								<li>1TB Bandwidth</li>
							</ul>
							<span><b>Price</b></span>
							<div className="price">120$<span>/month</span></div>
							<a href="sign-up.html" className="custom-btn">Get Started Now</a>
						</li>
					</ul>
				</div>
				<div role="tabpanel" className="tab-pane" id="yearly">
					<ul className="pricing-list">
						<li className="animated bounceInLeft delay-250 go">
							<div className="images"><img src="assets/images/basic-plan.svg" alt="basic-plan" /></div>
							<h5>Basic Plan</h5>
							<ul>
								<li>2GB RAM</li>
								<li>1 Cores</li>
								<li>2.5GHz per Core</li>
								<li>25GB SSD Storag</li>
								<li>50GB SAS Secondary</li>
								<li>1TB Bandwidth</li>
							</ul>
							<span><b>Price</b></span>
							<div className="price">90$<span>/month</span></div>
							<a href="#" className="custom-btn">Get Started Now</a>
						</li>
						<li className="animated bounceInLeft delay-500 go">
							<div className="images"><img src="assets/images/star-plan.png" alt="star-plan" /></div>
							<h5>Premium Plan</h5>
							<ul>
								<li>2GB RAM</li>
								<li>1 Cores</li>
								<li>2.5GHz per Core</li>
								<li>25GB SSD Storag</li>
								<li>50GB SAS Secondary</li>
								<li>1TB Bandwidth</li>
							</ul>
							<span><b>Price</b></span>
							<div className="price">110$<span>/month</span></div>
							<a href="#" className="custom-btn">Get Started Now</a>
						</li>
						<li className="animated bounceInLeft delay-750 go">
							<div className="images"><img src="assets/images/hosting.svg" alt="line-plan" /></div>
							<h5>Reseller Plan</h5>
							<ul>
								<li>2GB RAM</li>
								<li>1 Cores</li>
								<li>2.5GHz per Core</li>
								<li>25GB SSD Storag</li>
								<li>50GB SAS Secondary</li>
								<li>1TB Bandwidth</li>
							</ul>
							<span><b>Price</b></span>
							<div className="price">150$<span>/month</span></div>
							<a href="#" className="custom-btn">Get Started Now</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </React.Fragment>
    }
}

export default withRouter(HomePage);