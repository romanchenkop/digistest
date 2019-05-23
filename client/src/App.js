import React from 'react';
import './styles/App.css';
import MainPage from './components/MainPage';
import LogInContainer from './components/Login/LoginContainer';
import About from './components/About';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={About} />
        <Route path='/login' component={LogInContainer} />
      </div>
    </Router>
  );
};

export default App;
