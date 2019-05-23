import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { userIcon, myIcon, organizationIcon } from '../../etc/consts';
import geoJSON from '../../etc/geoJSON';

class MapComponent extends Component {
  getDistance = (origin, destination) => {
    const lon1 = this.toRadian(origin[1]),
      lat1 = this.toRadian(origin[0]),
      lon2 = this.toRadian(destination[1]),
      lat2 = this.toRadian(destination[0]);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
    const c = 2 * Math.asin(Math.sqrt(a));
    const EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
  };

  toRadian = (degree) => {
    return degree * Math.PI / 180;
  };

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
          {Array.prototype.map.call(geoJSON.features, (obj, idx) => (
            this.props.sideBarItemChecked &&
            obj.type === this.props.sideBarValue &&
            this.getDistance(position, [obj.geometry.coordinates[0], obj.geometry.coordinates[1]]) < 3000 &&
            < Marker
              icon={organizationIcon}
              draggable={false}
              key={`marker-${idx}`}
              position={[obj.geometry.coordinates[1], obj.geometry.coordinates[0]]}
            >
              <Popup>{obj.type}</Popup>
            </Marker>
          ))
          }
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
      </div >
    );
  }
}

export default MapComponent;
