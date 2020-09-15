import React, { useState, Component} from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person';

const StyledButton = styled.button `
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
    state = {
      persons: [
        { id: 'asa', name: 'Max', age: 28 },
        { id: 'ass', name: 'Mithun', age: 2 },
        { id: 'ssa', name: 'Jack', age: 8 }
      ],
      othersState: 'some other value',
      showPersons: false
	}



  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({persons: persons});


  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

	render() {
		const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
              changed= {(event) => this.nameChangedHandler(event, person.id)} />
					})}
				</div>
      );
      

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    
    const classes = []; 
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

		return (
     
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
          {persons}  
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Dose this work now?'));
  }
}



export default App;



///-----------------Example of React HOOK------------------------
// const [personsState, setPersonsState] = useState({
// 	persons: [
// 		{ name: 'Max', age: 28 },
// 		{ name: 'Mithun', age: 2 },
// 		{ name: 'Jack', age: 8 }
// 	],
// 	otherState: 'Some other value'
// });

// const switchNameHandler = () => {
// 	setPersonsState({
// 		persons: [
// 			{ name: 'Hosti', age: 28 },
// 			{ name: 'Mithuniyan', age: 2 },
// 			{ name: 'Jack Sparrow', age: 8 }
// 		]
// 	});
// };

//-------------------SwitchHandler for default state management---------
// switchNameHandler = (newName) => {
// 	this.setState({
// 		persons: [
// 			{ name: 'Hosti', age: 28 },
// 			{ name: newName, age: 2 },
// 			{ name: 'Jack Sparrow', age: 8 }
// 		]
// 	});
// }

//-------------------deletePerson Bad Practice------------------------
// deletePersonHandler = (personIndex) => {
// 	const persons = this.state.persons;
// 	persons.splice(personIndex, 1);
// 	this.setState({ persons: persons });
// }

//------------------Had an alternative approach----------------------
// deletePersonHandler = (personIndex) => {
// 	const persons = this.state.persons.slice();
// 	persons.splice(personIndex, 1);
// 	this.setState({ persons: persons });
// }


//-------------------Conditional Rendering-------------------
// {
// 	this.state.showPersons === true ?
// 		<div>
// 			<Person name={this.state.persons[0].name}
// 				age={this.state.persons[0].age} />

// 			<Person name={this.state.persons[1].name}
// 				age={this.state.persons[1].age}
// 				click={this.switchNameHandler.bind(this, "WuzzY")}
// 				changed={this.nameChangedHandler}>
// 				My Hobbies: Racing
// 			</Person>

// 			<Person
// 				name={this.state.persons[2].name}
// 				age={this.state.persons[2].age} />
// 		</div> : null
// }



