import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState( {searchField: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState( {monsters: users} ))
  }

  render() {
    return (
      <div className="App">
      <h1>Monsters Roladex</h1>
       <SearchBox placeholder='search monsters' handleChange={ this.handleChange }/>
     
        <CardList monsters={this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))}></CardList>
      </div>
    );
  }
}

export default App;
