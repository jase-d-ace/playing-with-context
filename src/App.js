import React, { Component } from 'react';
import Provider from './Provider';
import Test from './Test';
import DifferentComponent from './DifferentComponent';
import './App.css';

class App extends Component {

  state = {
    dark: false,
    light: false,
    on: false,
    off: true
  }

  constructor(props, context) {
    super(props)
    this.changeValues = this.changeValues.bind(this)
  }
  logSomethingFromProps() { 
    console.log('you can still log props as normal :)')
  }

  changeValues() {
    this.setState({
      dark: !this.state.dark,
      on: !this.state.on
    })
  }

  componentDidUpdate() {
    console.log('stuff changed', this.state)
  }

  render() {
    return (
      <Provider>
        <Test logSomethingFromProps={this.logSomethingFromProps} />
        <DifferentComponent changeValues={this.changeValues} />
      </Provider>
    );
  }
}

export default App;
