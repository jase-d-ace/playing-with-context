import React, { Component } from 'react';
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
