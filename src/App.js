import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import Provider from './Provider';
import Test from './Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Test />
      </Provider>
    );
  }
}

export default App;
