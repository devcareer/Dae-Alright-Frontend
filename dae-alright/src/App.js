import React, { Component } from 'react';
import ForgotPasswordModal from "./components/Modal/ForgotPasswordModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render(){
  return (

    <div className="App">
      <h1>dae-Alright</h1>
      <ForgotPasswordModal />
      
    </div>
  );
}

}

export default App;
