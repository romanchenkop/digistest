import React, { Component } from 'react';
import '../styles/App.css';
import Statements from './Statements';
import MapContainer from './Map/MapContainer';
import ButtonComponent from './ButtonComponent';

class MainPage extends Component {
  render() {
    return (
      <div>
        <MapContainer />
        <Statements />
        <ButtonComponent />
      </div>
    );
  }
}

export default MainPage;
