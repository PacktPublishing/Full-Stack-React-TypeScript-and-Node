import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/routes/Home";

function App() {
  const renderHome = (props: any) => <Home {...props} />;
  return (
    <Switch>
      <Route exact={true} path="/" render={renderHome} />
      <Route
        exact={true}
        path="/categorythreads/:categoryId"
        render={renderHome}
      />
    </Switch>
  );
}

export default App;
