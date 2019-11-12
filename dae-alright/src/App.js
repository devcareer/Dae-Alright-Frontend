import React, { Component } from 'react';

import SignInModal from "./components/Modal/SignInModal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/index'

import { connect } from "react-redux"

class App extends Component {

  render(){
  return (

    <div className="App">

      <h1>dae-Alright</h1>
      <SignInModal show={this.props.show} />
      

    </div>
  );
}

}

export default connect() (App);
