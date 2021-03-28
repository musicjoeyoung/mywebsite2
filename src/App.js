import React, { Component } from "react";
import "./App.css";
import MainPage from "./MainPage";
import Home from "./Home";
import ErrorNotFound from "./ErrorNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mainpage">
              <MainPage />
            </Route>
            <Route path="*" component={ErrorNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
