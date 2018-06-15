import React, { Component } from 'react';
import Provider from './Provider';
import Test from './Test';
import './App.css';

class App extends Component {

  logSomethingFromProps() {
    console.log('you can still log props as normal :)')
  }
  render() {
    return (
      <Provider>
        <Test logSomethingFromProps={this.logSomethingFromProps} />
      </Provider>
    );
  }
}

export default App;
