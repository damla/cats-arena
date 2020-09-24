import React, { Component } from "react";

import { SearchBox } from "./components/search-box/search-box.component";


import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      searchField: "",
      cats: []
    };
  }
 
  componentDidMount() {
    // componenti renderladiktan sonra calisiyor
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users })); // monster dizinine ekleniyor
  }

  handleChange = (e) => {
    this.setState( {
      searchField: e.target.value
    }
    )
  }

  render() {
    return (
      <div>
        <div className="Container">
          <h1>Cats Arena</h1>
          <SearchBox 
            placeholder="Search cats..."
            handleChange={ this.handleChange }
          />
        </div>
        <CardList cats= { this.state.cats } />
      </div>
    );
  }
}

export default App;