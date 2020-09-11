import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';

// class App extends Component {

//   state = {
//     Persons: [
//       {name: 'MAX', age: 28},
//       {name: 'Mum', age: 26},
//       {name: 'Mer', age: 27}
//     ],
//     othersState: 'some other value'
//   }
const App = props => {
  const [personsState, setPersonsState] = useState({
    Persons: [
      {name: 'MAX', age: 28},
      {name: 'Mum', age: 26},
      {name: 'Mer', age: 27}
    ],
    othersState: 'some other value'
  });

  const [otherState, setotherState] = useState('some other value');

  console.log(personsState);

  const switchNmaneHandler = () => {
    // console.log('was clicked!');
    // Do'not do thisthis.state.Persons[0].name = 'MAKI';
    setPersonsState({
      Persons: [
        {name: 'MAmu', age: 30},
        {name: 'Mum', age: 26},
        {name: 'Mer', age: 29}
      ],
      otherState: personsState.otherState
     });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNmaneHandler}>Switch Nmae</button>
        {/* <Person name="MAX" age="28" />
        <Person name="MAY" age="29">My Hobbies: Racing</Person>
        <Person name="MICK" age="30" /> */}
        <Person name={personsState.Persons[0].name} age={personsState.Persons[0].age} />
        <Person name={personsState.Persons[1].name} age={personsState.Persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.Persons[2].name} age={personsState.Persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Dose this work now?'));

};

export default App;

// state = {
//   Persons: [
//     {name: 'MAX', age: 28},
//     {name: 'Mum', age: 26},
//     {name: 'Mer', age: 27}
//   ],
//   othersState: 'some other value'
// }

// switchNmaneHandler = () => {
//   // console.log('was clicked!');
//   // Do'not do thisthis.state.Persons[0].name = 'MAKI';
//   this.setState({
//     Persons: [
//       {name: 'MAmu', age: 30},
//     {name: 'Mum', age: 26},
//     {name: 'Mer', age: 29}
//     ]
//    })
// }

// render() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={this.switchNmaneHandler}>Switch Nmae</button>
//       {/* <Person name="MAX" age="28" />
//       <Person name="MAY" age="29">My Hobbies: Racing</Person>
//       <Person name="MICK" age="30" /> */}
//       <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} />
//       <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} />
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Dose this work now?'));
// }
