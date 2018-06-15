import React, { Component, Fragment } from 'react';
import { MyContext } from './Provider';

class NewComponent extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <p>My brother is named {context.brother} and he is {context.brotherAge} years old. He {context.gamer ? 'is' : 'is not'} a gamer</p>
            <button onClick={context.toggleGamer}>Is he or is he not a gamer?</button>
            <button onClick={this.props.logSomethingFromProps}>Check your console!</button>
          </Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default NewComponent;
