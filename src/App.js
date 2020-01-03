import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../src/Pages/Homepage';

import { connect } from "react-redux";


class App extends Component {

  render(){
  return (

    <div className="App">
     <Homepage/> 
     
    </div>
  
  );
}

}

export default connect() (App);
