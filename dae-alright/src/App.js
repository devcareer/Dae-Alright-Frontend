
import React, { Component } from 'react';
import React, { Component } from 'react';
import SignInModal from "./components/Modal/SignInModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/index'
import HeaderWraper from "../src/components/Header/HeaderWraper/index"
import HeaderWraper from "../src/components/Header/HeaderWraper"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"
import React, { Component } from "react";
import SignUpModal from "./components/Modal/SignUpModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderWraper from "../src/components/Header/HeaderWraper/index";
import HeaderWraper from "../src/components/Header/HeaderWraper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from './components/Navigation/index'
import AuthNav from "./components/Navigation/AuthNav"


class App extends Component {
  render(){
  return (

    <div className="App">

      <h1>dae-Alright</h1>
      <SignInModal show={this.props.show} />
      
  render() {
    return (
      <div className="App">
        <Navigation />
        <AuthNav />
      </div>
    );
  }

}

}

export default connect() (App);
