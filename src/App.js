import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../src/Pages/Homepage';
import { connect } from "react-redux";
import './App.css';
import { connect } from "react-redux"
import RestauMenuPage from '../src/Pages/Restaurant/RestauMenuPage'
class App extends Component {

  render(){
  return (

    <div className="App">
  
     <RestauMenuPage />
    
    </div>
  
  );
}

}

export default connect() (App);
