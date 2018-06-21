import React, { Component } from 'react';
import { MyContext } from './Provider'
import NewComponent from './NewComponent';
import OtherComponent from './OtherComponent';

//we imported the createContext() method from our Provider.js file, which splits context into Provider and Consumer. We used Provider to actually have all of our values ready. Consumer is what we use to play with all of that stuff.

class Test extends Component {
  state = {
    foo: {
      bar: 'baz',
      awk: 0
    },
    fizz: true,
    buzz: ['foo', 'bar']
  }

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount() {
    this.props.logSomethingFromProps();
  }

  changeState(e) {
    let newState = this.state.buzz;
    if (e.target.value) {
      newState.push(e.target.value)
      this.setState({
        buzz: newState
      })
    }
  }

  // The child of any Consumer component is ALWAYS a render prop (aka a function that returns some JSX) instead of pure JSX. The parameter of this render prop is the context that we passed from our Provider "value" prop. In this case, it's the state object that we defined at the very top level of our component tree
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>My name is {context.name}, and I am {context.age} years old.</p>
            <button onClick={context.birthday}>Age me one year</button>
            <input type='text' onChange={context.rename} placeholder='give me a new name' name='name' />
            <input type='text' onChange={context.rename} placeholder='give my brother a new name' name='brother' />
            <NewComponent {...this.props} buzz={this.state.buzz} changeState={this.changeState} />
            <OtherComponent loadData={context.loadData} />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Test;
