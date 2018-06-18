import React, { Component } from 'react';

//this file exports two things. One is the context that we're going to create.
//we export that by exporting this variable, which invokes React's context API
export const MyContext = React.createContext();


//the next thing we export is the component that actually serves as our data store. The state object for this component grows and grows with all of the information that we need to pass to it.
// Once we're happy with all of the stuff that we're going to pass into the rest of our app, we jsut pass all of that information into our Context.PRovider component through the "value" prop. 

export default class Provider extends Component {

  //this is our data store. what we pass down through the rest of our app.
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

  //this render method returns the context component and the value prop that we pass this component is all of the stuff we want to give. This can be strictly the state object that we define, or an object that we pass directly. the "value" prop is going to be available to all of our consumers, so anything we want to access should be passed here.
  render() {
    return(
      <MyContext.Provider value={{...this.state}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

