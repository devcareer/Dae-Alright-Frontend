import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"
import Navigation from './components/Navigation/index'
import AuthNav from "./components/Navigation/AuthNav"
<<<<<<< HEAD
import SearchBar from './components/SearchBar';


=======
>>>>>>> 8d6af9f0be04ab5e3820c4f16d3bb5b1c58c8932
import SignIn from './components/Modal/SignInModal'

class App extends Component {

  render(){
  return (

    <div className="App">
     <Navigation/>
     <AuthNav/>
     <SignIn/>
     
    
    </div>
  
  );
}

}

export default connect() (App);
