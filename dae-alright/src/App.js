import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"
import Navigation from './components/Navigation/index'
import AuthNav from "./components/Navigation/AuthNav"
import SearchBar from './components/SearchBar';
import ForgotPasswordModal from "./components/Modal/ForgotPasswordModal";


class App extends Component {

  render(){
  return (

    <div className="App">
     <Navigation />
      <AuthNav />
      <ForgotPasswordModal />
      <SearchBar /> 
    </div>
  
  );
}

}

export default connect() (App);
