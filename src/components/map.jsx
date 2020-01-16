import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class Map extends Component {
  state = {
    center: {
      lat: 48.827855,
      lng: 2.350774
    },
    zoom: 12
  };

    render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }} className="map-container">
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
