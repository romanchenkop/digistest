import React, { Component } from 'react';
import MapComponent from './MapComponent';
import { connect } from 'react-redux';
import { getUserLocation, addMarker } from '../../modules/map/reducer';

export class MapContainer extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.props.getUserLocation(userLocation);
    });
  }

  render() {
    return (
      <div>
        <MapComponent
          addMarker={this.props.addMarker}
          markers={this.props.markers}
          markersOpacity={this.props.markersOpacity}
          location={this.props.location}
          zoom={this.props.zoom}
          allowsUserLocation={this.props.allowsUserLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markers: state.map.markers,
    markersOpacity: state.map.markersOpacity,
    location: state.map.location,
    zoom: state.map.zoom,
    allowsUserLocation: state.map.allowsUserLocation,
  };
};

const mapDispatchToProps = {
  getUserLocation,
  addMarker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapContainer);
