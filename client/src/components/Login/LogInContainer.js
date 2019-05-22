import React, { Component } from 'react';
import LogIn from './LogIn';
import { connect } from 'react-redux';
import { setEmailText, setPasswordText, handleFormSubmit } from '../../modules/auth/reducer';

export class LogInContainer extends Component {
  render() {
    return (
      <div>
        <LogIn
          handleFormSubmit={this.props.handleFormSubmit}
          setEmailText={this.props.setEmailText}
          setPasswordText={this.props.setPasswordText}
          email={this.props.email}
          password={this.props.password}
        />
      </div>
    );
  }
}

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
