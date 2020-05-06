import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Dave Choi" />
      </header>
    </div>
  );
}

export default App;
