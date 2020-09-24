import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      searchField: "",
      cats: []
    };
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState({ cats: users })); // monster dizinine ekleniyor
  }

  render() {
    return (
      <div>
        <div className="Container">
          <h1>Cats Arena</h1>
          <SearchBox placeholder="Search cats..."/>
        </div>
        <CardList cats= { this.state.cats } />
      </div>
    );
  }
}

export default App;