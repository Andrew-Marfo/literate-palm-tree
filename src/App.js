import { Component } from "react";

import NavBar from "./components/nav-bar/nav-bar";
import './App.css';
import './components/nav-bar/nav-bar.css'
import Body from "./components/body/body";
import Form from "./components/form/form";


class App extends Component{

  render() {
    return (
      <div className="app">
        <NavBar/>
        <Body />
        <Form/>
      </div>
    )
  }

}

export default App