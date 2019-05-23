import React, { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { setEmailText, setPasswordText, handleFormSubmit } from '../../modules/authReducer';

export class LogInContainer extends Component {
  render() {
    return (
      <div>
        <Login
          handleFormSubmit={this.props.handleFormSubmit}
          setEmailText={this.props.setEmailText}
          setPasswordText={this.props.setPasswordText}
          email={this.props.email}
          password={this.props.password}
        />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

const mapDispatchToProps = {
  setEmailText,
  setPasswordText,
  handleFormSubmit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInContainer);
