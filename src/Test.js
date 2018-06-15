import React, { Component } from 'react';
import { MyContext } from './Provider'
import NewComponent from './NewComponent';
import OtherComponent from './OtherComponent';

class Test extends Component {
  componentDidMount() {
    this.props.logSomethingFromProps();
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>My name is {context.name}, and I am {context.age} years old.</p>
            <button onClick={context.birthday}>Age me one year</button>
            <input type='text' onChange={context.rename} placeholder='give me a new name' name='name' />
            <input type='text' onChange={context.rename} placeholder='give my brother a new name' name='brother' />
            <NewComponent {...this.props} />
            <OtherComponent loadData={context.loadData} />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Test;
