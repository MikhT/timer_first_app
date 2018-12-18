import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const happy = <h2>I am happy</h2>;

  function getTime(){
    return new Date().toLocaleTimeString();
  }

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>My first react app is a timer</h1>
          {happy}

          <h2>Oggi è { new Date().toLocaleDateString() + " " + getTime()}</h2>
      </div>
    );
  }
}

export default App;
