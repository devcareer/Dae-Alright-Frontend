import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"
import Navigation from './components/Navigation/index'
import AuthNav from "./components/Navigation/AuthNav"
import SignUpModal from './components/Modal/SignUpModal'
class App extends Component {

  render(){
  return (

    <div className="App">
     <Navigation />
     <AuthNav/>
    <SignUpModal/>
    </div>
  
  );
}

}

export default connect() (App);
