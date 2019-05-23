import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux'
import { getValueFromSideBar } from '../modules/mapReducer'

class Statements extends Component {
  handleClick = (e) => {
    this.props.getValueFromSideBar(e.target)
  }

  render() {

    return (
      <div className="options-nav">
        <div className="row">
          <div className="col s12 m7">
            <form>
              <p className="checkbox-option">
                <label>
                  <input onClick={this.handleClick} value="School" type="checkbox" className="filled-in" />
                  <span>Schools</span>
                </label>
              </p>
              <p className="checkbox-option2">
                <label>
                  <input onClick={this.handleClick} value="Restaurant" type="checkbox" className="filled-in" />
                  <span>Restaurants</span>
                </label>
              </p>
              <p className="checkbox-option3">
                <label>
                  <input onClick={this.handleClick} value="Gas-station" type="checkbox" className="filled-in" />
                  <span>Gas-stations</span>
                </label>
              </p>
              <p className="checkbox-option4">
                <label>
                  <input onClick={this.handleClick} value="Pharmacy" type="checkbox" className="filled-in" />
                  <span>Pharmacies</span>
                </label>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideBarValue: state.map.sideBarValue,
    sideBarItemChecked: state.map.sideBarItemChecked,
  }
}

const mapDispatchToProps = {
  getValueFromSideBar,
}

export default connect(mapStateToProps, mapDispatchToProps)(Statements);
