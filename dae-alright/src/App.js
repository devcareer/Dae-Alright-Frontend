import React, { Component } from 'react';
import SignUpModal from "./components/Modal/SignUpModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render(){
  return (

    <div className="App">
      <h1>dae-Alright</h1>
      <SignUpModal />
      
    </div>
  );
}

}

export default App;
