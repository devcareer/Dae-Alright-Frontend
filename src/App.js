import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./components/Navigation/index";
import AuthNav from "./components/Navigation/AuthNav";
import SearchBar from "./components/SearchBar";
import SignIn from "./components/Modal/SignInModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <AuthNav />
        <SignIn />
        <Switch>
        
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
