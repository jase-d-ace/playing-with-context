import React, { Component } from 'react';

export const MyContext = React.createContext();


export default class Provider extends Component {

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
      let name = e.target.name;
      let value = e.target.value
      this.setState({
        [name] : value
      })
    },
    toggleGamer: () => {
      this.setState({
        gamer: !this.state.gamer
      })
    },
    apiDataLoaded: false,
    apiData: null,
    loadData: (stuff) => {
      this.setState({
        apiDataLoaded: true,
        apiData: stuff
      })
    }
  }

  render() {
    return(
      <MyContext.Provider value={{...this.state}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

