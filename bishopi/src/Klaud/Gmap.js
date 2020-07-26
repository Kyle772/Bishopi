import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Gmap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 


  render() {
    return (


      <div style={{ height: '280px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyApyx87Z34JjdLtdb_kFWczjYJ-aAFKQy0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.846087699999998}
            lng={90.38426199999999}
            text="KeenDevs Company"
          />
        </GoogleMapReact>
      </div>


    )
  }
}

export default Gmap
