import { Component } from "react";

import NavBar from "./components/nav-bar/nav-bar";
import './App.css';
import './components/nav-bar/nav-bar.css'
import Body from "./components/body/body";


class App extends Component{

  render() {
    return (
      <div className="app">
        <NavBar/>
        <Body/>
      </div>
    )
  }

}

export default App