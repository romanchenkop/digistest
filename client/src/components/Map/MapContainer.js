import React, { Component } from 'react';
import MapComponent from './MapComponent';
import { connect } from 'react-redux';
import { getUserLocation, addMarker } from '../../modules/mapReducer';

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
          sideBarItemChecked={this.props.sideBarItemChecked}
          sideBarValue={this.props.sideBarValue}
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
    sideBarItemChecked: state.map.sideBarItemChecked,
    sideBarValue: state.map.sideBarValue,
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
