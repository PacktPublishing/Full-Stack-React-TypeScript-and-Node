import React from "react";
import "./App.css";
import Home from "./Home";
import AnotherScreen from './AnotherScreen';
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/another" component={AnotherScreen}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
