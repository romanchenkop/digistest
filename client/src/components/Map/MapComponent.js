import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { userIcon, myIcon } from '../../etc/consts';

class MapComponent extends Component {
  onMapClick = (event) => {
    const { latlng } = event;
    this.props.addMarker(latlng);
  };

  render(props) {
    const position = [this.props.location.lat, this.props.location.lng];
    return (
      <div className="main-page-container">
        <Map
          onClick={this.onMapClick}
          className="map"
          center={position}
          zoom={this.props.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.allowsUserLocation && (
            <Marker icon={myIcon} position={position}>
              <Popup>Current Location</Popup>
            </Marker>
          )}
          {this.props.markers.map((position, idx) => (
            <Marker
              opacity={this.props.markersOpacity}
              icon={userIcon}
              draggable="true"
              key={`marker-${idx}`}
              position={position}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default MapComponent;
