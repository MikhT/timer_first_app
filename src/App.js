import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Timer from './Timer'

const happy = <h2>I am happy</h2>;


class App extends Component {

  render() {
    return (
      <div className="App">
       <h1>My first react app is a timer</h1>

          {happy}

          <Timer timezone="0" />

      </div>
    );
  }
}

export default App;
