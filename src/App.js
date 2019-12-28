import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux"
import Navigation from './components/Navigation/index'
import AuthNav from "./components/Navigation/AuthNav"
import SearchBar from './components/SearchBar';
import RestaurantInfo from './Pages/Restaurant-Info-Page/Restaurant-Info-Page'



class App extends Component {

  render(){
  return (

    <div className="App">
     {/* <Navigation />
      <AuthNav />
      <SearchBar /> */}
      <RestaurantInfo /> 
    </div>
  
  );
}

}

export default connect() (App);
