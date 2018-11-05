import React, { Component } from 'react';
import Person from './components/person';
import AddPerson from './components/addPerson';

class App extends Component {
  state = {
    people: [
      { name: 'Sergey', age: 24, gender: 'male' },
      { name: 'Alice', age: 22, gender: 'female' },
      { name: 'Diana', age: 18, gender: 'female' }
    ]
  }

  handleAddPerson = person => e => {
    e.preventDefault();
    this.setState(state => ({ people: [...state.people, person] }));
  }

  handleRemovePerson = name => e => {
    this.setState(state => ({ people: state.people.filter(person => person.name !== name) }));
  }

  render() {
    return (
      <div className="App">
        <h1>My fifth React app!</h1>
        <p>Hey there :)</p>
        {
          this.state.people.map(person => {
            return <Person key={person.name} name={person.name} age={person.age} gender={person.gender} onRemovePerson={this.handleRemovePerson} />
          })
        }
        <AddPerson onAddPerson={this.handleAddPerson} />
      </div>
    );
  }
}

export default App;
