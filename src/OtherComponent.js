import React, { Component } from 'react';
import { MyContext } from './Provider';

class OtherComponent extends Component {

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
    .then( info => info.json() )
    .then( (data) => {
      console.log('got a thing', data)
      this.props.loadData(data)
    })
    .catch( err => {
      console.log('err', err)
    })
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <p>{console.log('got context', context)} {context.apiDataLoaded ? context.name : 'hihihi'}</p>
        )}
      </MyContext.Consumer>
    )
  }

}

export default OtherComponent
