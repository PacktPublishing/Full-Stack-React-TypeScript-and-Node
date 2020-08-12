import React from "react";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";
import RightMenu from "./components/RightMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
