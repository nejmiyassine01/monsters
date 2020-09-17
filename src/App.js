import React from 'react';

import { CardList } from './Components/Card-List/Card-List.component';
import { SearchBox } from './Components/Search-Box/Search-Box.component';

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFields: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => 
    this.setState({
      searchFields: e.target.value
    })
  
  render() {
    const { monsters, searchFields } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFields.toLowerCase())
    )

    return (
      <div className="App">
        <h1> Monster Rodolex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleSearch={this.handleChange}
        />
        <CardList 
          monsters={filteredMonsters} 
        />
      </div>
    );
  }
}

export default App;
