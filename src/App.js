import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      searchField: "",
      cats: [
        {
          "id": 11,
          "name": "Ömer Ayyıldız",
          "username": "catomer",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]
    };
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState({ cats: [...users, ...this.state.cats ] })); // monster dizinine ekleniyor
  }

  handleChange = (e) => {
    this.setState( { searchField: e.target.value }) // searchten gelen degeri al
  }


  render() {
    // const cats = this.state.cats;
    // const searchField = this.state.searchField;
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter( cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div>
        <div className="Container">
          <h1>Cats Arena</h1>
          <SearchBox placeholder="Search cats..." handleChange = { this.handleChange } />
        </div>
        <CardList cats= { filteredCats } />
      </div>
    );
  }
}

export default App;