import React, { Component } from 'react';
import './Header.css';
import logo from './primeLogo.png'

class Header extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <img src={logo} className="App-logo" alt="logo" /> 
            </header>
        </div>  
    );
  }
}

export default Header;