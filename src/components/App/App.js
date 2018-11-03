import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
// import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Feeling} />
          <Route path ="/1" component={Understand} />
        </div>
      </Router>
    );
  }
}

export default App;
