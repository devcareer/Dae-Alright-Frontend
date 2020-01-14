import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import RestauMenuPage from './Pages/Restaurant/RestauMenuPage'
import Homepage from './Pages/Homepage'
import UserDashboard from './Pages/user-dashboard';
import DashboardOrder from './Pages/user-dashboard/order-dashboard';
import OrderRefund from "./Pages/user-dashboard/dashboard-refund"

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

export default App;
