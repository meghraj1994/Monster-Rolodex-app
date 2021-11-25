import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './component/cardlist/cardlist-component';
import { SearchBox } from './component/search-box/search-box-component';

class App extends Component {
  //creating a constructor

  constructor() {
    super();

    //creating this.state and this and whatever inside it will be accessible throughout the class
    this.state = {
      Monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState({ Monsters: users }));
  }

  handleChangeFunction = (e) =>
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state);
    });

  //  whenever you want to iterate something you can use map()
  render() {
    //for searching
    //this is same as
    // Monsters = this.state.Monsters;
    // searchField = this.state.searchField;
    const { Monsters, searchField } = this.state;
    const filterdMonsters = Monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    console.log(filterdMonsters);

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChangeFunction}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
