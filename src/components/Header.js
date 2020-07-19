import React, { Component } from 'react';
import logo from '../trivia.png';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
