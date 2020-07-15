import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./hello.js"



function App({name, age} /*destructuring the object extracting propoerties from the object */) 
{
  return (

    <div className="App">
      Hello world from App.js updated by {name} age is {age}
      <br/>
      <Hello fname="Ahsan"/>

    </div>

  );
}

export default App;
