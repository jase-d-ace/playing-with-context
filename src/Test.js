import React, { Component } from 'react';
import { MyContext } from './Provider'
import NewComponent from './NewComponent';

class Test extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>My name is {context.name}, and I am {context.age} years old.</p>
            <button onClick={context.birthday}>Age me one year</button>
            <input type='text' onChange={context.rename} placeholder='give me a new name' />
            <NewComponent />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Test;
