import React, { Component } from 'react';
import SignUpModal from "../components/signup-modal/signup-modal.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

class App extends Component {

  render(){
  return (
    <div className="App">
      <h1>dae-Alright</h1>
      <SignUpModal />
      
    </div>
  );
}

