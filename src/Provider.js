import React, { Component } from 'react';

export const MyContext = React.createContext();


class Provider extends Component {

  state = {
    name: 'Jase',
    brother: 'JR',
    age: 23,
    brotherAge: 14,
    gamer: false,
    birthday: () => {
      this.setState({
        age: this.state.age + 1
      })
    },
    rename: e => {
      this.setState({
        name: e.target.value
      })
    },
    toggleGamer: () => {
      this.setState({
        gamer: !this.state.gamer
      })
    }
  }

  render() {
    return(
      <MyContext.Provider value={{...this.state, value: 'new Value'}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default Provider
