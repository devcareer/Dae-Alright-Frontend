import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/index'

import { connect } from "react-redux"

class App extends Component {

  render(){
  return (

    <div className="App">
     <Footer />
    
    </div>
  );
}

}

export default connect() (App);
