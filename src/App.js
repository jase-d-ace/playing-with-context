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

  //we can also use the rest of react as normal
  constructor(props, context) {
    super(props)
    this.changeValues = this.changeValues.bind(this)
  }

  //test method to see if we can still pass props through components loaded through our provider. Spoiler alert: we can.
  logSomethingFromProps() {
    console.log('you can still log props as normal :)')
  }

  changeValues() {
    this.setState({
      dark: !this.state.dark,
      on: !this.state.on
    })
  }


  //before we can have access to all of our context stuff, we need to make sure that any components that we want to know about context need to be wrapped by our Provider component. This should happen at the highest level of our app so that our context can trickle down as far as possible.
  render() {
    return (
      <Provider>
        <Test logSomethingFromProps={this.logSomethingFromProps} {...this.state} />
        <DifferentComponent changeValues={this.changeValues} />
      </Provider>
    );
  }
}

export default App;
