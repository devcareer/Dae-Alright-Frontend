import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { connect } from "react-redux";
import ResturantSearch from './Pages/ResturantSearch/index';

// import Header from './Pages/ResturantSearch/Header';
// import Navigation from './components/Navigation/index'
// import AuthNav from "./components/Navigation/AuthNav"
// import SearchBar from './components/SearchBar';



class App extends Component {

  render(){
  return (

    <div className="App">
      
      <ResturantSearch />
     {/* <Navigation />
      <AuthNav />
      <SearchBar />  */}
    </div>
  
  );
}

}

export default connect() (App);
