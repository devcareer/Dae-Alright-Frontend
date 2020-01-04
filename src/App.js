import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"

import UserDashboard from './Pages/Homepage/user-dashboard';




class App extends Component {

  render(){
  return (

    <div className="App">
       <UserDashboard />
    </div>
  
  );
}

}

export default connect() (App);
