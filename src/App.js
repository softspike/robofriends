import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

//State >> props
//PROPS - react reads props and renders /one way data flow/ props come out of state
//STATE - the description of the app/ object what describes the application
class App extends React.Component {
  constructor() {
    //super calls instructor of component
    super();
    //state can change and affect the entire app
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  //constructor and render are prebuild in react
  //if making own methods on a components use air function !!!
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      //includes - prebuild method
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      // need to add div to wrap it, otherwise not going to be displayed
      <div className='tc'>
        <h1 className='f2'>robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
