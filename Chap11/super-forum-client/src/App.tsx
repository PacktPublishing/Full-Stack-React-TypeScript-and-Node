import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Thread from "./components/routes/thread/Thread";

function App() {
  const renderHome = (props: any) => <Home {...props} />;
  const renderThread = (props: any) => <Thread {...props} />;

  return (
    <Switch>
      <Route exact={true} path="/" render={renderHome} />
      <Route path="/categorythreads/:categoryId" render={renderHome} />
      <Route path="/thread/:id" render={renderThread} />
    </Switch>
  );
}

export default App;
