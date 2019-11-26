import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"


import Homepage from "../src/Pages/Homepage/Homepage"

class App extends Component {

  render(){
  return (

    <div className="App">
     
  
     <Homepage />
    
    </div>
  
  );
}

}

export default connect() (App);
