import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMarkers, showMarkers } from '../modules/map/reducer';

class ButtonComponent extends Component {
  onSaveClick = () => {

    const locationArray = {
      markers: [this.props.markers]
    }
    this.props.saveMarkers(locationArray);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.onSaveClick}
          id="save-btn"
          className={
            this.props.saveBtnAble
              ? "waves-effect waves-light btn"
              : "waves-effect waves-light btn btn disabled"
          }
        >
          Save Markers
        </button>

        <button
          onClick={this.props.showMarkers}
          id="show-hide-btn"
          className={
            this.props.saveBtnAble
              ? "waves-effect waves-light btn"
              : "waves-effect waves-light btn btn disabled"
          }
        >
          Show Saved
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saveBtnAble: state.map.saveBtnAble,
    markers: state.map.markers,
  };
};

const mapDispatchToProps = {
  saveMarkers,
  showMarkers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent);
