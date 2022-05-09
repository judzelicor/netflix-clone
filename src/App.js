import React, {Component} from "react"
import {BrowserRouter as Router, Route , Switch} from "react-router-dom"

import Home from "./pages/home"

import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <p>Netflix clone signin page</p>
          </Route>
          <Route path="/signup">
            <p>Netflix clone signup page</p>
          </Route>
          <Route path="/browse">
            <p>Netflix clone browse page upon successfull authentication</p>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
