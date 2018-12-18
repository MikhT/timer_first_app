import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/App.css';
import Timer from './components/Timer'

const happy = <h2>I am happy</h2>;


class App extends Component {

  render() {
    return (
      <div className="App">
       <h1>My first react app is a timer</h1>

          {happy}

          <Timer secs="1" timezone="0" />
          <Timer secs="2" timezone="0" />
          <Timer secs="3" timezone="0" />

          <img src="https://image.shutterstock.com/image-vector/good-job-stampvector-illustration-260nw-773726719.jpg" />

      </div>
    );
  }
}

export default App;
