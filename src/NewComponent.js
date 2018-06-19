import React, { Component, Fragment } from 'react';
import { MyContext } from './Provider';

class NewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buzz: props.buzz
    }
  }
  componentDidMount() {
    console.log('reloaded', this.state)
  }

  renderPropArray() {
    return this.state.buzz.map( (thing, i) => (<p key={i}>{thing}</p>))
  }

  componentDidUpdate(prevProps, nextState) {
    console.log('updated...', prevProps, nextState)
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <p>My brother is named {context.brother} and he is {context.brotherAge} years old. He {context.gamer ? 'is' : 'is not'} a gamer</p>
            <button onClick={context.toggleGamer}>Is he or is he not a gamer?</button>
            <button onClick={this.props.logSomethingFromProps}>Check your console!</button>
            {this.state.buzz ? this.renderPropArray() : ''}
            <input onChange={this.props.changeState} type='text' placeholder='put stuff on screen' />
          </Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default NewComponent;
