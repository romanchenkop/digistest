import React, { Component } from 'react';
import axios from "axios"

class Login extends Component {
  onEmailChange = (event) =>
    this.props.setEmailText(event.target.value);

  handleSubmitClick = (e) => {
    e.preventDefault();
    const userData = {
      "login": this.props.email,
      "password": this.props.password,
    };
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/user/login',
      data: {
        login: userData.login,
        password: userData.password,
      }
    })
      .then(response => alert(response.data))
      .catch(() => alert("You gave wrong credentials"))
  };

  onPasswordChange = (event) => {
    this.props.setPasswordText(event.target.value);
  }

  render() {
    return (
      <div className="row" >
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <input
                value={this.props.email}
                onChange={this.onEmailChange}
                name="name"
                id="name"
                type="email"
                className="validate"
                placeholder="email"
              />
            </div>
            <div className="input-field col s12">
              <input
                name="password"
                onChange={this.onPasswordChange}
                id="password"
                type="password"
                className="validate"
                placeholder="password"
                value={this.props.password}
              />
            </div>
          </div>
          <button
            onClick={this.handleSubmitClick}
            //TODO: Create a logic that sends login and password to db
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
