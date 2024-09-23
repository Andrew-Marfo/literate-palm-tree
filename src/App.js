import { Component } from "react";

import NavBar from "./components/nav-bar/nav-bar";
import './App.css';


class App extends Component{

  render() {
    return (
      <div className="app">
        <NavBar/>
      </div>
    )
  }

}

export default App