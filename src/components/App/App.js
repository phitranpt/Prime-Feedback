import React, { Component } from 'react';
import './App.css';
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header';
// import Admin from '../Admin/Admin';
// import Feeling from '../Feeling/Feeling';
// import Understand from '../Understand/Understand';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
